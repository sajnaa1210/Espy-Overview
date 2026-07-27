<div align="center">

<img src="espy.png" alt="Espy" width="160" />

# Espy

### Your Personal AI Shopping Friend

An AI-powered virtual robot that thinks on its own, analyzes products for 15+ harmful ingredients, warns you about unsafe chemicals, and shops alongside you like a real friend.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Click_Here-brightgreen?style=for-the-badge)](https://espy-overview.wasmer.app/)
[![Platform](https://img.shields.io/badge/Platform-Android-purple?style=for-the-badge&logo=android)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)]()

</div>

---

## The Problem

Every day, millions of people unknowingly buy products containing **parabens, formaldehyde, lead, sulfates**, and other harmful chemicals. Existing shopping apps don't tell you what's really inside the products you put on your skin.

## The Solution

**Espy** — a 3D robot companion that lives on your phone and **overlays on top of shopping apps** like Amazon, Flipkart, and Myntra. It scans every product you view, analyzes ingredients in real-time, and instantly warns you if something is dangerous for your skin type.

> *"Bestie, STOP! This moisturizer contains formaldehyde — a known carcinogen! I won't let you buy this!"*

---

## Key Features

#### AI Brain with Free Will
Espy doesn't give robotic, scripted responses. It has **genuine conversations**, forms opinions, and develops its own personality based on your interactions. No two Espys are the same.

#### Real-Time Ingredient Analysis
Scans product ingredients instantly. Detects **15+ harmful chemicals** including parabens, SLS, formaldehyde, lead, phthalates, and more — color-coded as Safe, Warning, or Dangerous.

#### Skin Guardian
Knows your skin type (Normal, Dry, Oily, Sensitive, Combination, Acne-Prone) and gives **personalized warnings**. A product safe for oily skin might be terrible for sensitive skin — Espy knows the difference.

#### App Overlay
Espy floats as a **widget over shopping apps** (Amazon, Flipkart, Myntra, AJIO, Meesho, Nykaa). It watches what you're browsing and provides real-time advice without switching apps.

#### Battery & Energy System
Espy is not just an app — it's a **living companion**. Long shopping sessions drain its battery. Visit the Charging Station in Espy's World to recharge.

#### Budget Tracker
Tracks your **monthly spending**, remaining budget, and category-wise breakdowns. Espy reminds you when you're going over budget and suggests smarter alternatives.

---

## Espy's World

Espy has its own **virtual world** inside the app — it's not just a tool, it's a friend with a home.

| Feature | Description |
|---------|-------------|
| **Espy's Home** | A cozy room with furniture. Products you buy appear as items in the room |
| **Wardrobe** | Interactive wardrobe with openable doors. Purchased fashion items hang inside |
| **Charging Station** | Recharge Espy's battery when it gets tired from shopping |
| **Play Area** | Espy wanders, plays with objects, and does cute things when idle |

---

## 8 Personality Types

Choose how Espy talks and acts:

| Personality | Vibe |
|-------------|------|
| Friendly | Warm, caring, and always supportive |
| Sassy | Witty, bold, and tells it like it is |
| Shy | Gentle, quiet, and a little nervous |
| Energetic | Hyped, excited, and full of energy |
| Calm | Peaceful, wise, and zen-like |
| Protective | Guardian-like, always watching out for you |
| Playful | Fun, silly, and loves to joke |
| Sophisticated | Elegant, refined, and tasteful |

---

## How It Works

**Step 1 — Tell Espy About You**
Set your preferences — skin type, dress size, allergies, favorite brands, budget. Espy remembers everything.

**Step 2 — Start Shopping**
Open any shopping app. Espy floats over it, analyzing every product you view. No extra steps needed.

**Step 3 — Espy Analyzes**
It checks ingredients, compares prices, reads reviews (spotting fake ones), and matches with your preferences.

**Step 4 — Get Real-Time Advice**
Espy speaks to you like a friend. *"Bestie, this has parabens! Your sensitive skin will hate it!"* — Instant, personal, protective.

---

## Supported Platforms

<div align="center">

`Amazon` `Flipkart` `Myntra` `AJIO` `Meesho` `Nykaa` `Snapdeal` `JioMart` `eBay`

</div>

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | Jetpack Compose, Material 3 |
| AI Engine | Custom NLP brain with free-will response system |
| Database | Room DB, Hilt DI |
| Scanning | ML Kit, OCR |
| Async | Kotlin Coroutines, Flow |
| Overlay | Android WindowManager Service |
| Prototype | HTML, CSS, JavaScript |

---

## Live Demo

**Web Prototype:** [espy-overview.wasmer.app](https://espy-overview.wasmer.app/)

Experience Espy's full feature set — product browsing, ingredient analysis, Espy's World with furniture, wardrobe interaction, budget tracking, and all 8 personality modes.

---

## Project Structure

```
Espy/
├── app/src/main/java/com/espy/shoppingassistant/
│   ├── ai/
│   │   ├── EspyBrain.kt              # Core AI with free-will responses
│   │   └── ShoppingDecisionEngine.kt  # Ingredient analyzer (15+ chemicals)
│   ├── models/                        # Data models
│   ├── data/                          # DAOs, repositories
│   ├── ui/                            # Compose screens, theme
│   ├── services/                      # Overlay service
│   └── viewmodels/                    # MVVM viewmodels
├── Espy-Website/                      # Landing page (deployed)
├── Espy-Prototype/                    # Interactive web prototype
└── README.md
```

---

## Built For

- **Hackathon Demo** — Interactive web prototype for judges
- **Real Product** — Full Android app with overlay, AI brain, and ingredient scanning

---

<div align="center">

**Made with purple-heart for people who love shopping**

</div>
