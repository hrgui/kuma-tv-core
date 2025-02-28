# @hrgui/kuma-tv-core

# Getting Started

```
bun i
bun run dev
```

# Environment Variables

## `VITE_KUMA_SPATIAL_NAV_DEBUG`

If enabled, then it will show debug layers between all clickable components.

# Default API System

- Login is "mocked"
- Values are hardcoded into the API client

The idea is the pages/components do not care about how it obtains data, it just requests for data through events.

# Pages

## EntryPage

The first screen visited if you are not a logged in user.

## LoginPage

Logs in the user.

## SettingsPage

Global Settings

### Membership Info

### Preferences

### History Management

### Support

### Log Out

## HistoryPage

History of the user's content watched

## WatchlistPage

A list that the user is keeping track of by series

## HomePage

Contains all highlights

## VideoPlayerPage

Plays a video

## BrowsePage

Allows the user to browse content

## SeriesPage

Shows the series, details, episode list, current status

## SearchPage

Allows the user to search

# Deliberate choices made in architecture to support older browsers

## Tailwind

`postcss-var-replace` was used to deal with the fact that Chromium 47 (Tizen 3) does not support CSS Variables.
