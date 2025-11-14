# Amplitude + AppsFlyer Cross-Device Tracking - Implementation Plan

## Overview
Implement cross-device tracking to connect Landing Page visits → App Store download → App usage using Amplitude Analytics and AppsFlyer attribution.

## Key Information
- **Amplitude API Key**: `ec49b0078f2f38d4767bc03a1fdf81b4` (same as app)
- **AppsFlyer OneLink**: `https://napfy.onelink.me/RAwm/daa4bnyw`
- **App Store ID**: `id6752109860`
- **Tracking Strategy**: Use anonymous_id to connect web sessions with app sessions

---

## Landing Page Implementation

### 1. Install Amplitude SDK
```bash
npm install @amplitude/analytics-browser
```

### 2. Create Anonymous ID System
**File**: `src/lib/anonymous-id.ts`

**Purpose**: Generate persistent unique identifier for web visitors

**Logic**:
- Check localStorage for existing `anonymous_id`
- If not found: generate new UUID using `crypto.randomUUID()`
- Store in localStorage (persists across sessions)
- Return ID for use in Amplitude and OneLink

**Why localStorage not sessionStorage**:
Multiple LP visits before download should be tracked as SAME user.

---

### 3. Capture UTM Parameters
**File**: `src/lib/utm.ts`

**Purpose**: Capture campaign attribution data from URL

**Parameters to capture** (only if present in URL):
- `utm_source` (e.g., "instagram", "tiktok", "google")
- `utm_medium` (e.g., "cpc", "organic", "paid")
- `utm_campaign` (e.g., "summer_launch", "black_friday")
- `utm_content` (e.g., "video_ad_1", "carousel_3")
- `utm_term` (e.g., "baby sleep app")

**Storage**: sessionStorage (cleared when user closes browser)

**Why capture manually**:
Amplitude auto-captures UTMs on page load, but we need them to build OneLink URLs for download buttons.

---

### 4. Initialize Amplitude
**File**: `src/lib/amplitude.ts`

**Configuration**:
- API Key: `ec49b0078f2f38d4767bc03a1fdf81b4`
- Set `userId` to anonymous_id
- Set UTMs as user properties (if captured)
- Set `platform: 'web'` property to distinguish from app events

**File**: `src/components/AmplitudeAnalytics.tsx`

**Purpose**: Client component to initialize Amplitude on page load

**Actions**:
1. Generate/retrieve anonymous_id
2. Capture UTMs from URL
3. Initialize Amplitude with config
4. Set user properties

---

### 5. Build OneLink URLs
**File**: `src/lib/onelink.ts`

**Purpose**: Create dynamic download links with tracking parameters

**Base URL**: `https://napfy.onelink.me/RAwm/daa4bnyw`

**Parameters to add**:
- `af_web_dp`: Desktop redirect URL → `https://apps.apple.com/app/id6752109860`
- `af_sub1`: Pass anonymous_id for web→app connection
- `utm_*`: All captured UTM parameters (if present)

**Example output**:
```
https://napfy.onelink.me/RAwm/daa4bnyw?af_web_dp=https://apps.apple.com/app/id6752109860&af_sub1=abc-123-def-456&utm_source=instagram&utm_medium=paid&utm_campaign=launch
```

**Why each parameter**:
- `af_web_dp`: So desktop users go directly to App Store website (not back to LP)
- `af_sub1`: Custom parameter to pass anonymous_id to app
- `utm_*`: Attribution data for AppsFlyer dashboard

---

### 6. Update Download Buttons
**Files to modify**:
- `src/lib/analytics.ts` → Add Amplitude events
- `src/components/Hero.tsx` → Use dynamic OneLink URL
- `src/components/CallToAction.tsx` → Use dynamic OneLink URL

**Changes**:
- Import `buildOneLinkUrl()` function
- Replace hardcoded App Store link with dynamic OneLink
- Add Amplitude event tracking to existing `trackDownloadClick()`

---

### 7. Add to Layout
**File**: `src/app/layout.tsx`

Add `<AmplitudeAnalytics />` component alongside existing analytics (Firebase, Meta Pixel, TikTok Pixel, Vercel).

---

## App Implementation - WHAT Needs to Happen

> **Note for iOS Team**: These are requirements and reference examples. Implement using your existing architecture and coding standards.

### Requirement 1: Extract anonymous_id from Deep Link
**WHAT**: When app opens via OneLink, retrieve the `af_sub1` parameter value

**WHY**: This contains the web visitor's anonymous_id that connects their LP session to app session

**Reference Example** (Swift):
```swift
// Example using URLComponents - use your preferred method
if let url = userActivity.webpageURL,
   let components = URLComponents(url: url, resolvingAgainstBaseURL: true),
   let queryItems = components.queryItems {
    let anonymousId = queryItems.first(where: { $0.name == "af_sub1" })?.value
    // Store anonymousId for next step
}
```

**Alternative approaches your team might use**:
- AppsFlyer SDK's `onConversionDataSuccess` callback
- Universal Links handler
- Your existing deep link routing system

---

### Requirement 2: Send anonymous_id to Amplitude
**WHAT**: Call Amplitude SDK to set the anonymous_id as the userId

**WHY**: This tells Amplitude to merge all web events (before download) with app events (after download) into a single user profile

**Reference Example** (Swift):
```swift
// Example - adjust for your Amplitude SDK version
Amplitude.instance().setUserId(anonymousId)
```

**Critical**: This must happen BEFORE sending any other Amplitude events in the app.

---

### Requirement 3: Send app events with platform identifier
**WHAT**: All app events should include `platform: 'ios'` property

**WHY**: Allows filtering web events vs app events in Amplitude dashboards

**Reference Example** (Swift):
```swift
// Example event tracking
Amplitude.instance().logEvent("app_opened", withEventProperties: [
    "platform": "ios",
    "source": "organic" // or from deep link params
])
```

---

## Validation Plan

### Phase 1: Landing Page Validation (No App Required)
**Tools**: Firebase Analytics, Amplitude Dashboard

**Steps**:
1. Open LP with UTM parameters: `https://napfy.com.br/?utm_source=test&utm_medium=manual&utm_campaign=validation`
2. Open browser DevTools → Application → Local Storage → verify `anonymous_id` exists
3. Open browser DevTools → Application → Session Storage → verify UTMs captured
4. Click download button → verify OneLink URL includes `af_sub1` and UTM parameters
5. Check Firebase Analytics (real-time) → verify events appear
6. Check Amplitude Dashboard → User Lookup → search for your anonymous_id → verify:
   - User properties include UTMs
   - Platform = "web"
   - Download click event appears

**Expected result**: All web events visible in Amplitude with correct anonymous_id and properties.

---

### Phase 2: App Validation (After iOS Team Implementation)
**Tools**: Amplitude Dashboard, AppsFlyer Dashboard

**Steps**:
1. Clear browser data (to start fresh)
2. Visit LP with test UTMs → note the anonymous_id from localStorage
3. Click download button → install app from App Store
4. Open app via OneLink (important: not directly from home screen)
5. Wait 5-10 minutes for data processing
6. Check Amplitude Dashboard:
   - User Lookup → search for anonymous_id from step 2
   - Verify events from BOTH platforms appear:
     - Older events: `platform=web` (LP visits)
     - Newer events: `platform=ios` (app usage)
   - Check "Merge IDs" section shows web+app sessions merged
7. Check AppsFlyer Dashboard:
   - Verify install attributed correctly
   - Check if `af_sub1` parameter visible in install data

**Expected result**: Single user profile in Amplitude showing complete journey from LP → App.

---

### Phase 3: Production Validation
**Tools**: Amplitude Cohorts, AppsFlyer Reports

**Create test cohort in Amplitude**:
- Filter: Users who did "click_download_app" AND "app_opened"
- Should show users who completed full funnel: web → app

**Check attribution in AppsFlyer**:
- Verify installs are attributed to correct media source (from utm_source)
- Compare AppsFlyer install counts vs Amplitude app_opened counts (should align)

---

## How This Integrates with Existing S2S Setup

**Your Current Server-to-Server Integrations**:
- RevenueCat → AppsFlyer (subscription events)
- AppsFlyer ↔ Amplitude (attribution postbacks)

**This Client-Side Implementation**:
- Landing Page → Amplitude (web behavior)
- App → Amplitude (app behavior with anonymous_id)

**How They Work Together**:

```
User Journey:
┌─────────────────────────────────────────────────────────────┐
│ 1. LP Visit (Client-side)                                   │
│    └→ Amplitude: page_view, click_download [platform=web]   │
├─────────────────────────────────────────────────────────────┤
│ 2. App Install (S2S)                                         │
│    └→ AppsFlyer: install event                               │
│    └→ AppsFlyer → Amplitude: attribution data (S2S)          │
├─────────────────────────────────────────────────────────────┤
│ 3. App Opens (Client-side)                                   │
│    └→ App: setUserId(anonymous_id) [merges with web events]  │
│    └→ Amplitude: app_opened [platform=ios]                   │
├─────────────────────────────────────────────────────────────┤
│ 4. User Subscribes (S2S)                                     │
│    └→ RevenueCat → AppsFlyer: revenue event                  │
│    └→ AppsFlyer → Amplitude: revenue data (S2S)              │
└─────────────────────────────────────────────────────────────┘

Result in Amplitude:
- Single user profile with anonymous_id
- Web events (LP behavior)
- App events (usage, merged via setUserId)
- Attribution data (from AppsFlyer S2S)
- Revenue data (from RevenueCat → AppsFlyer → Amplitude S2S)
```

**Why Both Client-Side AND S2S**:
- **Client-side**: Tracks user behavior and enables web→app identity resolution
- **S2S**: Tracks server events (purchases, refunds) and ensures data accuracy even if user blocks client-side tracking

**No Conflicts**:
- Client SDK sends behavior events (clicks, views, sessions)
- S2S sends transactional events (installs, revenue, attribution)
- Different event types, complementary data

---

## Technical Notes

### Why Same Amplitude API Key for Web + App?
Enables identity resolution. When app calls `setUserId(anonymous_id)`, Amplitude automatically:
1. Finds all web events with that anonymous_id
2. Merges them into the app user's profile
3. Shows complete funnel: LP visit → download → app usage → purchase

If using separate API keys → separate projects → no automatic merging.

### Why Not Just Use AppsFlyer for Web Tracking?
AppsFlyer Web SDK exists but:
1. Designed primarily for attribution, not product analytics
2. Amplitude provides better behavior analysis tools (cohorts, funnels, retention)
3. Your team already uses Amplitude for app → keep same tool for consistency

### Multiple LP Visits Before Download
**Scenario**: User visits LP on Monday, leaves, returns Tuesday, downloads Wednesday

**What Happens**:
- Monday: anonymous_id="abc-123" generated → saved to localStorage → LP events sent
- Tuesday: anonymous_id="abc-123" retrieved from localStorage → more LP events sent with SAME ID
- Wednesday: Downloads via OneLink with af_sub1=abc-123 → app sends events with same ID
- Result: Amplitude sees all 3 days as same user (correct!)

### Browser Clearing / Incognito Mode
**Problem**: If user clears browser data or uses incognito, localStorage is wiped → new anonymous_id generated

**Impact**:
- Web events before clearing = one user profile
- Web + app events after clearing = different user profile
- These won't merge (different anonymous_ids)

**Mitigation**:
- Acceptable limitation - affects small % of users
- After app login (if you add auth), use real user_id which properly merges profiles
- AppsFlyer attribution still works (device-based, not cookie-based)

---

## Security Considerations

### Is Passing anonymous_id in URL Safe?
**Yes**, because:
- It's not personally identifiable information (random UUID)
- No sensitive data attached to it (just behavioral events)
- Only used to connect analytics events, not for authentication
- Standard practice in analytics (Google Analytics does similar with Client ID)

### Could Users Manipulate af_sub1?
**Yes, but**:
- Only affects their own analytics (can't see other users' data)
- Amplitude has abuse detection for impossible patterns
- Impact: Minor analytics inaccuracy for malicious user only
- Not a security vulnerability (no access control based on this ID)

---

## Cost Implications

**Amplitude Pricing**: Based on Monthly Tracked Users (MTU)

**This Implementation**:
- Web visits = tracked as users
- App sessions = tracked as users
- BUT: Same anonymous_id = counted as 1 MTU (not 2)

**Example**:
- 10,000 LP visitors
- 1,000 convert to app downloads
- 1,000 use app
- Amplitude MTU = ~10,000 (not 11,000) because of identity merging

**Why Same API Key Saves Money**:
Separate keys = web MTU + app MTU billed separately
Same key = merged users = single MTU count

---

## Rollback Plan

If issues arise after deployment:

**Landing Page**:
1. Remove `<AmplitudeAnalytics />` from layout.tsx
2. Revert download buttons to hardcoded App Store links
3. Keep Firebase, Meta Pixel, TikTok Pixel (already working)

**App**:
1. Remove `setUserId(anonymous_id)` call
2. Keep standard Amplitude tracking
3. S2S integrations unaffected

**Data Loss**: None - Amplitude events already sent are retained

---

## Implementation Timeline

**Phase 1: Landing Page** (Can be done independently)
- [ ] Install Amplitude SDK
- [ ] Create anonymous-id, utm, amplitude, onelink libraries
- [ ] Create AmplitudeAnalytics component
- [ ] Update analytics.ts with Amplitude events
- [ ] Update download buttons with dynamic OneLink
- [ ] Add component to layout.tsx
- [ ] Deploy and validate (Phase 1 validation steps)

**Phase 2: App** (iOS team, after Phase 1 validated)
- [ ] Extract af_sub1 from deep link
- [ ] Send anonymous_id to Amplitude
- [ ] Add platform='ios' to events
- [ ] Deploy and validate (Phase 2 validation steps)

**Phase 3: Monitor** (Ongoing)
- [ ] Check Amplitude dashboards for data quality
- [ ] Compare AppsFlyer vs Amplitude install counts
- [ ] Monitor merge rate (% of app users with prior web events)

---

## Questions for iOS Team

Before implementation, iOS team should clarify:

1. **Deep Link Handling**: How do you currently handle AppsFlyer deep links? (SDK callback, manual parsing, other?)
2. **Amplitude SDK Version**: Which version are you using? (affects exact API calls)
3. **App Launch Flow**: When is the right time to call setUserId? (before/after other initialization?)
4. **Testing**: Do you have a staging environment with TestFlight builds we can use for validation?

---

## Success Metrics

After full implementation, you should see:

**In Amplitude**:
- Funnel: LP Page View → Download Click → App Install → First Session → First Purchase
- Conversion rates at each step
- Time between steps (e.g., avg time from download click to app open)

**In AppsFlyer**:
- Installs attributed to correct sources (instagram, tiktok, google, etc.)
- Deep link opens (users who came via OneLink vs organic)

**In Revenue**:
- Ability to track: Which LP campaign → led to download → led to subscription
- ROI calculation: Ad spend on Instagram campaign X → resulted in Y subscriptions

---

## Support Resources

**Amplitude Docs**:
- Cross-platform tracking: https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#cross-platform-tracking
- User identity: https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#user-identity

**AppsFlyer Docs**:
- OneLink deep linking: https://support.appsflyer.com/hc/en-us/articles/207032246-OneLink-overview
- Custom parameters: https://support.appsflyer.com/hc/en-us/articles/360001437618-Deep-linking-with-OneLink

**Debugging Tools**:
- Amplitude User Lookup: https://analytics.amplitude.com/napfy/project/YOUR_PROJECT/search
- AppsFlyer Test Console: https://hq1.appsflyer.com/test-console

---

## Glossary

**anonymous_id**: Random UUID generated on web, used to connect LP sessions with app sessions

**af_sub1**: AppsFlyer OneLink custom parameter, used to pass anonymous_id from web to app

**UTM parameters**: Campaign tracking parameters (source, medium, campaign, content, term)

**Identity Resolution**: Amplitude's ability to merge multiple devices/sessions into single user profile

**S2S (Server-to-Server)**: Backend integrations that send events without client SDK (e.g., RevenueCat → AppsFlyer)

**MTU (Monthly Tracked Users)**: Amplitude pricing metric - unique users per month

**OneLink**: AppsFlyer's universal deep link solution for mobile attribution

---

*Plan created: 2025-11-13*
*Next step: Implement Phase 1 (Landing Page) after user approval*
