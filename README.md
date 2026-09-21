# MarvelVault

**Your Personal Marvel Movie & Series Tracker**

MarvelVault is a lightweight, dark-themed Android application designed to help Marvel fans explore, organize, search, and track Marvel movies and television series in one place.

The project focuses on creating a clean and practical catalogue experience rather than hosting or distributing movie and television content. Users can browse titles, explore details, organize their personal watchlist, mark content as watched, review their watched history, and follow different viewing orders.

MarvelVault is being developed with a strong focus on simplicity, performance, offline-friendly personal tracking, and a lightweight mobile experience.

---

## ✨ Features

### 🎬 Movie Catalogue

MarvelVault provides a structured movie catalogue containing Marvel titles with useful information such as:

- Movie title
- Release year
- Marvel universe
- MCU phase
- Duration
- Genre
- Description
- Watch-order information

The catalogue is designed to make it easy to discover and organize Marvel movies without overwhelming the user with unnecessary interface elements.

The project is being expanded gradually so that additional Marvel movies and related universes can be included in a consistent data structure.

---

### 📺 Series Catalogue

MarvelVault also provides a dedicated section for Marvel television series.

Series entries can contain information including:

- Series title
- Release year
- Universe
- MCU phase
- Number of seasons
- Series details
- Watch-order information

The series catalogue will continue to expand as additional Marvel television content is added to the project.

---

### 🔍 Search

The application includes search functionality for quickly finding movies and series.

Users can search by title without manually browsing the entire catalogue.

The search system is designed to remain lightweight while providing a fast and straightforward experience on mobile devices.

Future versions may expand filtering capabilities to include:

- Universe
- Phase
- Release year
- Movie or series
- Watched status

---

## 📋 My Watchlist

MarvelVault includes a personal watchlist system.

Users can add movies or series to **My List** directly from their details page.

Saved items are stored locally on the user's device, allowing the application to remember the user's personal selections.

Users can:

- Add a movie to My List
- Add a series to My List
- Remove saved titles
- Open saved titles directly
- Review their saved Marvel content

The watchlist is intended for personal organization and does not require MarvelVault to host any media files.

---

## ✅ Watched Tracking

MarvelVault includes a watched-status system that allows users to mark individual movies or series as watched.

A title can be changed between:

- Unwatched
- Watched

The watched state is stored locally using device storage.

This allows users to maintain a personal record of the Marvel content they have already completed.

---

## 🕘 Watched History

The application includes a dedicated **Watched History** section.

When a movie or series is marked as watched, it can appear in the user's watched history.

Users can:

- View previously watched titles
- Open a watched title
- Mark a title as unwatched
- Maintain their personal viewing history

This feature is designed to make MarvelVault useful as a long-term personal tracker rather than simply a static movie catalogue.

---

## 🧭 Watch Order

One of the core goals of MarvelVault is helping users understand different ways to watch Marvel content.

The project is designed to support viewing orders such as:

### Release Order

Content can be organized according to its original release sequence.

### Chronological Order

Content can also be organized according to the fictional timeline where appropriate.

The watch-order system will be expanded as the catalogue grows.

The goal is to make Marvel's interconnected stories easier to navigate, especially for users who are new to the Marvel Cinematic Universe.

---

## 🌌 Marvel Universes

MarvelVault is not intended to be limited to a single Marvel universe.

The project currently provides a data structure for different categories, including:

- Marvel Cinematic Universe (MCU)
- X-Men Universe
- Sony's Spider-Man Universe
- Marvel Animation
- Other relevant Marvel-related universes

Universe categorization will continue to evolve as the project expands.

This structure allows MarvelVault to organize content without mixing unrelated timelines or franchises together.

---

## 🔗 Official Watch Options

MarvelVault is designed to provide information about legitimate ways to watch or obtain Marvel content.

The project does **not** host movie or television files.

Where appropriate, future watch links will point users toward official or legitimate platforms such as:

- Official streaming services
- Digital purchase platforms
- Digital rental platforms
- Official distributor pages

Availability can vary depending on country, licensing agreements, and time. Therefore, watch availability should be verified before being presented as a current option.

MarvelVault will not intentionally provide links to pirated or unauthorized streaming sources.

---

## 🎨 Design

MarvelVault uses a dark cinematic interface designed for comfortable use on mobile devices.

The visual direction focuses on:

- Dark backgrounds
- High-contrast typography
- Minimal visual clutter
- Compact cards
- Simple navigation
- Consistent spacing
- Lightweight UI components

The interface is intentionally designed without relying heavily on large photographic assets.

This helps keep the application lightweight while maintaining a modern cinematic appearance.

---

## ⚡ Lightweight Philosophy

MarvelVault is designed to remain relatively small and efficient.

The project avoids unnecessary assets, excessive third-party libraries, and unnecessary application functionality.

The intended application size is approximately **15–30 MB**, depending on the final build configuration and dependencies.

The project prioritizes:

- Fast startup
- Simple navigation
- Low asset usage
- Efficient local storage
- Minimal unnecessary permissions
- Maintainable code
- Practical mobile performance

---

## 🛠️ Technology Stack

MarvelVault is currently built using modern React Native and Expo technologies.

### Core Technologies

- React Native
- Expo
- Expo Router
- JavaScript
- AsyncStorage
- React Native Web

### Navigation

The application uses **Expo Router** for file-based navigation.

Screens are organized inside the `app` directory, making navigation straightforward and maintainable.

### Local Storage

MarvelVault uses AsyncStorage for local user data such as:

- Watchlist
- Watched status
- Watched history

No personal account system is required for these local tracking features.

---

## 📁 Project Structure

The project follows a modular structure:

```text
MarvelVault/
├── app/
│   ├── index.js
│   ├── movies.js
│   ├── series.js
│   ├── movie-details.js
│   ├── series-details.js
│   ├── watch-order.js
│   ├── settings.js
│   ├── watchlist.js
│   └── watched-history.js
│
├── assets/
│
├── components/
│   ├── movie-card.js
│   ├── series-card.js
│   ├── section-title.js
│   ├── search-bar.js
│   ├── status-badge.js
│   └── empty-state.js
│
├── constants/
│   ├── theme.js
│   ├── settings.js
│   ├── navigation.js
│   ├── watchlist.js
│   └── watched.js
│
├── data/
│   ├── movies.js
│   ├── series.js
│   ├── universes.js
│   └── watch-links.js
│
├── package.json
├── package-lock.json
└── app.json
```

The project structure is intentionally separated into screens, reusable components, constants, and data.

---

## 🚀 Development

To run MarvelVault locally, clone the repository and install the dependencies.

```bash
git clone https://github.com/madmax17310-wq/MarvelVault.git
cd MarvelVault
npm install
```

Start the Expo development server:

```bash
npx expo start
```

For development environments where the local network cannot directly connect to a mobile device, Expo Tunnel can be used:

```bash
npx expo start --tunnel
```

The generated Expo URL can then be opened using Expo Go.

---

## 📱 Testing

MarvelVault is currently tested through Expo Go during development.

Important areas for testing include:

- Home navigation
- Movie catalogue
- Series catalogue
- Search
- Movie details
- Series details
- Add to My List
- Remove from My List
- Mark as Watched
- Mark as Unwatched
- Watched History
- Settings navigation
- Watch Order

The project should be tested on a physical Android device before creating a production release.

---

## 🗺️ Roadmap

MarvelVault is still under active development.

Planned improvements include:

### Content Expansion

- Complete MCU movie catalogue
- Complete MCU series catalogue
- Additional Marvel universes
- More detailed metadata
- Expanded watch-order data

### Watch Links

- Verified official platform information
- Region-aware availability where practical
- Official digital purchase and rental options
- Better watch-option presentation

### Tracking

- Episode-level tracking
- Season progress
- Watch progress
- Completion statistics
- Improved history management

### Discovery

- Advanced filtering
- Universe filters
- Phase filters
- Year filters
- Watched/unwatched filters
- Improved search

### UI/UX

- Improved movie and series cards
- Better details pages
- More refined dark cinematic design
- Improved navigation
- Performance optimization

---

## 🔐 Privacy & Security

MarvelVault is designed with a privacy-first approach for personal tracking features.

The application does not need access to unrelated personal information.

Local tracking data is stored on the user's device.

The project avoids unnecessary permissions and does not intentionally include suspicious or malicious behavior.

MarvelVault is a catalogue and tracking application. It is not designed to access, download, or distribute unauthorized media.

---

## ⚠️ Disclaimer

Marvel, the Marvel Cinematic Universe, and related characters, titles, logos, and intellectual properties belong to their respective rights holders.

MarvelVault is an independent fan-oriented tracking and catalogue project.

The project does not claim ownership of Marvel intellectual property.

MarvelVault does not host, upload, or distribute copyrighted movie or television files.

Any future external watch links should be directed toward legitimate and authorized services.

Streaming and digital availability may vary by country, region, platform, licensing agreement, and date.

---

## 📌 Project Status

**Development Status: Active**

The core application structure and major tracking functionality are currently implemented.

Current development is focused on expanding the content database, improving watch-order information, adding more Marvel series, and creating properly verified official watch options.

The project will undergo additional testing and refinement before a production release.

---

## 📦 Release Philosophy

Production releases should use a properly signed **release APK** rather than a debug build.

The project aims to maintain:

- A stable application package identity
- A stable signing key
- Minimal permissions
- No suspicious SDKs
- No unnecessary background behavior
- Reliable dependency management
- Reproducible release builds

When appropriate, releases may be distributed through the project's official GitHub repository or another trusted official distribution channel.

Google Play Store publication may also be considered for a future production release.

---

## 🤝 Contributions

MarvelVault is currently developed as an independent project.

Contributions, suggestions, bug reports, and feature ideas may be considered as the project evolves.

When proposing changes, contributors should prioritize:

- Code quality
- Lightweight implementation
- User privacy
- Legal content sources
- Maintainability
- Mobile performance
- Consistent UI design

---

## 📄 License

The final licensing model for MarvelVault will be defined before public production distribution.

Third-party packages remain subject to their respective licenses.

Marvel-related intellectual property remains the property of its respective rights holders.

---

## ⭐ Final Goal

The long-term goal of MarvelVault is to become a lightweight, organized, and reliable personal Marvel catalogue and tracking application.

Instead of attempting to become another streaming service, MarvelVault focuses on helping users answer practical questions such as:

**What should I watch?**

**Where does this title belong?**

**Which phase or universe is it part of?**

**Have I already watched it?**

**What should I watch next?**

**Where can I legally watch or obtain it?**

By combining a structured Marvel catalogue, watch orders, personal watchlists, watched history, and legitimate watch information, MarvelVault aims to provide a simple central hub for managing a personal Marvel viewing journey.

The project will continue to evolve as more content, better metadata, improved tracking, and additional discovery features are introduced.