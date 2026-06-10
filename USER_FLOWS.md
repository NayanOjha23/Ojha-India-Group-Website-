# Ojha Group — User Flows

> Status key: ✅ Complete &nbsp;|&nbsp; ⚠️ Partial &nbsp;|&nbsp; ❌ Broken

---

## Primary User Flows

### 1. Discover → Explore a Business Vertical
A visitor lands on the homepage and navigates into a specific division.

```
Home (/) → Navbar: Industries dropdown → /warehousing        ✅
Home (/) → Navbar: Industries dropdown → /charter-spaces     ✅
Home (/) → Navbar: Industries dropdown → /real-estate        ✅
Home (/) → Navbar: Industries dropdown → /industries#electronics  ⚠️  (no dedicated /electronics page)

Home (/) → "View All Divisions →" → /industries             ✅
Home (/) → Business Verticals card → /industries#warehousing ✅
Home (/) → Business Verticals card → /industries#charter     ✅
Home (/) → Business Verticals card → /industries#real-estate ✅
Home (/) → Business Verticals card → /industries#electronics ✅

/industries → "Explore Division →" → /warehousing           ✅
/industries → "Explore Division →" → /charter-spaces        ✅
/industries → "Explore Division →" → /real-estate           ✅
/industries → "Explore Division →" (Electronics) → /contact ⚠️  (sends to contact, no dedicated page)
```

**Status: ⚠️ Partial** — Electronics has no dedicated page; routes to `/contact` instead.

---

### 2. Warehousing Inquiry Flow
A prospect evaluates warehousing facilities and submits an enquiry.

```
/warehousing → "View Facilities" → #solutions (anchor)       ✅
/warehousing → Storage Solution card → #dry / #cold / #wet / #hazardous  ⚠️  (anchors exist in href but no matching id= on page)
/warehousing → "Enquire Now →" → /contact                   ✅
/warehousing → EnquiryForm (inline, bottom of page)          ⚠️  (form renders but Formspree ID not configured — won't submit)
/warehousing → "Download Brochure" → /warehousing/brochure   ❌  (page does not exist)
```

**Status: ⚠️ Partial** — Form is not wired up; brochure link is broken; storage-type anchors have no matching sections.

---

### 3. Hub Operations (West India) Inquiry Flow
A prospect in Maharashtra/Gujarat evaluates regional warehousing and contacts the local team.

```
/hub-operations → "View Regional Assets" → #facilities (anchor)  ✅
/hub-operations → Facility card → #dry / #cold / #chemical       ⚠️  (no matching id= sections)
/hub-operations → "View All Properties →" → /warehousing         ✅
/hub-operations → EnquiryForm (inline, bottom of page)            ⚠️  (Formspree not configured)
/hub-operations → Phone link → tel:+912245678900                  ✅
/hub-operations → "Download Region Specs" → /hub-operations/brochure  ❌
```

**Status: ⚠️ Partial** — Same form + brochure issues as warehousing.

---

### 4. Real Estate Leasing Flow
An enterprise tenant evaluates commercial space and submits a leasing enquiry.

```
/real-estate → "View Portfolio" → #portfolio (anchor)            ✅
/real-estate → "Corporate Vision" → /about#vision                ⚠️  (/about exists but #vision anchor has no id= on page)
/real-estate → Portfolio card → #offices / #retail / #mixed-use  ⚠️  (no matching id= sections)
/real-estate → Key Projects card → /real-estate/ojha-nexus       ❌  (project detail page missing)
/real-estate → Key Projects card → /real-estate/zenith-plaza     ❌  (project detail page missing)
/real-estate → EnquiryForm (inline)                               ⚠️  (Formspree not configured)
/real-estate → Phone link → tel:+911800OJHAGROUP                 ✅
/real-estate → Email link → mailto:leasing@ojhagroup.in          ✅
```

**Status: ⚠️ Partial** — Project detail pages are the biggest gap; form not wired up.

---

### 5. Charter Spaces / Managed Office Flow
A business evaluating a managed office submits a proposal request.

```
/charter-spaces → "Explore Solutions" → #workspaces (anchor)     ✅
/charter-spaces → "View Locations →" → #nodes (anchor)           ✅
/charter-spaces → "See All Floors →" → #workspaces (anchor)      ✅
/charter-spaces → Workspace card → #private / #suites / #hybrid  ⚠️  (no matching id= sections)
/charter-spaces → EnquiryForm "Request a Proposal"               ⚠️  (Formspree not configured)
```

**Status: ⚠️ Partial** — Workspace-type anchors have no sections; form not wired up.

---

### 6. General Partnership / Contact Flow
Any visitor who wants to reach the company directly.

```
Navbar → "Contact" → /contact                                    ✅
/industries → "Initiate Partnership →" → /contact               ✅
/warehousing → "Enquire Now →" → /contact                       ✅
/contact → EnquiryForm → Formspree submission                    ⚠️  (Formspree ID "YOUR_FORMSPREE_ID" — not configured)
/contact → Regional Hubs section → #hubs anchor                  ✅
/contact → "View Global Map ↗" link                              ❌  (points to #, non-functional)
```

**Status: ⚠️ Partial** — Page is fully built and looks complete; form will not submit until Formspree ID is set.

---

### 7. Learn About the Company Flow
A visitor or potential investor researching Ojha Group's background.

```
Navbar → "About" → /about                                        ✅
Home → "Explore Our Legacy" hero button → /about                 ✅
/about → Hero ghost button → /projects                           ❌  (/projects page does not exist)
/about → "Corporate Vision" (from other pages) → /about#vision  ⚠️  (no #vision id= on page)
```

**Status: ⚠️ Partial** — About page itself is complete; `/projects` CTA is broken; `#vision` anchor is missing.

---

### 8. News & Insights Flow
A visitor reading company news or reports.

```
Home → NewsCard click → /news/q3-2025-results                   ❌
Home → NewsCard click → /news/solar-milestone                   ❌
Home → NewsCard click → /news/urban-logistics                   ❌
Home → "See All →" → /news                                      ❌
```

**Status: ❌ Broken** — No news pages exist at all. All 4 links are dead.

---

### 9. Services / Capabilities Flow
A visitor exploring Ojha Group's specific service offerings.

```
Home → Capabilities card "Learn More" → /services#maintenance   ❌
Home → Capabilities card "Learn More" → /services#support       ❌
Home → Capabilities card "Learn More" → /services#engineering   ❌
Home → Capabilities card "Learn More" → /services#pricing       ❌
Footer → "Strengths" → /services                                ❌
```

**Status: ❌ Broken** — `/services` page does not exist. All 5 links are dead.

---

### 10. Portfolio / Projects Flow
A visitor browsing Ojha Group's completed and active projects.

```
Home hero → "View Portfolio" → /projects                        ❌
About hero → "View Our Portfolio" → /projects                   ❌
```

**Status: ❌ Broken** — `/projects` page does not exist.

---

### 11. Footer Navigation Flow
Any visitor using the footer for secondary navigation.

```
Footer → "Home" → /                                             ✅
Footer → "About Us" → /about                                    ✅
Footer → "Business Verticals" → /industries                     ✅
Footer → "Strengths" → /services                                ❌
Footer → "Network Map" → /contact#network                       ✅
Footer → Division links → /industries#[section]                 ✅
Footer → "Privacy Policy" → /privacy                            ❌
Footer → "Terms of Service" → /terms                            ❌
Footer → Social (LinkedIn/Twitter/YouTube)                       ✅ (external)
Footer → Newsletter email signup                                 ⚠️  (no submission target wired up)
```

**Status: ⚠️ Partial** — Legal pages and services link are broken; newsletter form has no backend.

---

## Summary Table

| Flow | Status | Blocker |
|---|---|---|
| 1. Discover → Explore Vertical | ⚠️ Partial | No dedicated Electronics page |
| 2. Warehousing Inquiry | ⚠️ Partial | Formspree not configured; brochure missing |
| 3. Hub Operations Inquiry | ⚠️ Partial | Formspree not configured; brochure missing |
| 4. Real Estate Leasing | ⚠️ Partial | Project detail pages missing; Formspree not set |
| 5. Charter Spaces Proposal | ⚠️ Partial | Formspree not configured |
| 6. General Contact | ⚠️ Partial | Formspree not configured |
| 7. Learn About the Company | ⚠️ Partial | `/projects` missing; `#vision` anchor missing |
| 8. News & Insights | ❌ Broken | No `/news` route or article pages |
| 9. Services / Capabilities | ❌ Broken | No `/services` page |
| 10. Portfolio / Projects | ❌ Broken | No `/projects` page |
| 11. Footer Navigation | ⚠️ Partial | `/privacy`, `/terms`, `/services` missing |

---

## Missing Pages (by priority)

| Route | Referenced From | Priority |
|---|---|---|
| `/services` | Home (×4), Footer | High — primary CTA on homepage |
| `/projects` | Home hero, About hero | High — primary CTA on homepage |
| `/news` | Home | Medium |
| `/news/[slug]` (×3) | Home news cards | Medium |
| `/real-estate/ojha-nexus` | Real Estate page | Medium |
| `/real-estate/zenith-plaza` | Real Estate page | Medium |
| `/industries/electronics` | Navbar dropdown | Low — currently routes to `/contact` |
| `/privacy` | Footer | Low |
| `/terms` | Footer | Low |
| `/warehousing/brochure` | Warehousing hero | Low — likely a PDF redirect |
| `/hub-operations/brochure` | Hub Operations hero | Low — likely a PDF redirect |

---

## Missing Anchor IDs (broken in-page links)

These `href` values exist in CTAs but the target page has no matching `id=` on any element:

| Anchor | Page | Used By |
|---|---|---|
| `#vision` | `/about` | Real Estate, About hero ghost btn |
| `#offices` | `/real-estate` | Portfolio card |
| `#retail` | `/real-estate` | Portfolio card |
| `#mixed-use` | `/real-estate` | Portfolio card |
| `#private` | `/charter-spaces` | Workspace card |
| `#suites` | `/charter-spaces` | Workspace card |
| `#hybrid` | `/charter-spaces` | Workspace card |
| `#dry` | `/warehousing` | Storage solution card |
| `#cold` | `/warehousing` | Storage solution card |
| `#wet` | `/warehousing` | Storage solution card |
| `#hazardous` | `/warehousing` | Storage solution card |
| `#dry` | `/hub-operations` | Facility card |
| `#cold` | `/hub-operations` | Facility card |
| `#chemical` | `/hub-operations` | Facility card |

---

## Forms — Completion Status

All enquiry forms render correctly but **none will submit** until Formspree IDs are configured.

| Page | Form | Formspree ID | Status |
|---|---|---|---|
| `/contact` | General Enquiry | `YOUR_FORMSPREE_ID` | ⚠️ Not wired |
| `/warehousing` | Warehousing Enquiry | `YOUR_FORMSPREE_ID` | ⚠️ Not wired |
| `/real-estate` | Leasing Enquiry | `YOUR_FORMSPREE_ID` | ⚠️ Not wired |
| `/charter-spaces` | Proposal Request | `YOUR_FORMSPREE_ID` | ⚠️ Not wired |
| `/hub-operations` | Regional Enquiry | `YOUR_FORMSPREE_ID` | ⚠️ Not wired |
| Footer | Newsletter Signup | — | ⚠️ No backend |

To fix: replace each `formspreeId="YOUR_FORMSPREE_ID"` with a real Formspree endpoint ID from [formspree.io](https://formspree.io).
