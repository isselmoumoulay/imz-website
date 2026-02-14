# 🚀 IMZ - Solutions Informatiques Innovantes

Site web officiel d'IMZ, entreprise spécialisée dans les solutions informatiques innovantes et sur-mesure.

## 📋 Aperçu du Projet

**Nom**: IMZ Website  
**Version**: 2.0 (Améliorée)  
**Stack Technique**: Next.js 14 + TypeScript + Tailwind CSS  
**Déploiement**: Cloudflare Pages  
**Status**: ✅ Actif et optimisé

---

## ✨ Fonctionnalités Principales

### ✅ Fonctionnalités Complétées

- 🌍 **Multi-langue** : Support FR/EN avec système de traduction dynamique
- 🎨 **Design Moderne** : Interface responsive avec Tailwind CSS
- ⚡ **Animations Fluides** : Framer Motion pour des transitions élégantes
- 📱 **Mobile-First** : Parfaitement adapté à tous les écrans
- 🔍 **SEO Optimisé** : Métadonnées complètes, Open Graph, Twitter Cards
- ♿ **Accessible** : ARIA labels et bonnes pratiques d'accessibilité
- 🚀 **Performances** : Lazy loading, compression, optimisations
- 📊 **Sitemap & Robots.txt** : Pour un meilleur référencement
- 🎯 **Sections** :
  - Hero avec CTA
  - PoweredBy / Partenaires
  - Services (Stuff)
  - Expérience
  - Portfolio / Projets
  - Équipe / Sponsors
  - Formulaire de contact (Formspree)

### 🎯 Détails des Sections & URIs Fonctionnels

#### 1. **Section Hero** (`/`)
- **Description** : Page d'accueil avec titre principal et CTA
- **Fonctionnalités** :
  - Animation SVG au scroll
  - Bouton "Contact" avec ancre vers `#CONTACT_NOW`
  - Support multi-langue (FR/EN)

#### 2. **Navigation** (Header)
- **URIs** :
  - `#ACCUEIL` - Retour à l'accueil
  - `#PROPOS` - À propos d'IMZ
  - `#SERVICES` - Services proposés
  - `#PORTFOLIO` - Projets réalisés
  - `#RÉFÉRENCES` - Références clients
  - `#CONTACT_NOW` - Formulaire de contact
- **Fonctionnalités** :
  - Menu burger responsive (mobile)
  - Changement de langue (FR ⟷ EN)
  - Navbar sticky avec shadow

#### 3. **Section PoweredBy**
- **Description** : Technologies et outils utilisés
- **Affichage** : Logos de partenaires/technologies

#### 4. **Section Services (Stuff)**
- **Description** : Liste des services proposés par IMZ
- **Animations** : Apparition progressive au scroll

#### 5. **Section Expérience**
- **Description** : Années d'expérience, projets réalisés, statistiques
- **Format** : Cards avec animations

#### 6. **Section Portfolio (Work)**
- **Description** : Projets réalisés avec captures d'écran
- **Images** : 
  - `/images/projects/gcm.png`
  - `/images/projects/gestion*.png`
  - `/images/projects/gvim.png`
  - `/images/projects/ma_maison.jpg`
  - `/images/projects/tresor*.png`

#### 7. **Section Team (Sponsors)**
- **Description** : Logos des clients/partenaires
- **Images** :
  - `/images/sponsors/bcm.png`
  - `/images/sponsors/bemc.jpeg`
  - `/images/sponsors/gcm.png`
  - `/images/sponsors/nouad.jpeg`
  - `/images/sponsors/rim.png`

#### 8. **Section Contact** (`#CONTACT_NOW`)
- **Fonctionnalités** :
  - Formulaire connecté à Formspree
  - Champs : Nom, Email, Message
  - Validation côté client
  - Envoi asynchrone
- **URI** : Ancre `#CONTACT_NOW` accessible depuis le header

---

## 🎨 Améliorations Récentes (v2.0)

### 🔐 **Sécurité**
- ✅ Correction de 10 vulnérabilités npm
- ✅ Mise à jour des dépendances critiques

### 🔍 **SEO & Métadonnées**
- ✅ Titre et description optimisés
- ✅ Open Graph pour réseaux sociaux
- ✅ Twitter Cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Favicons (16x16, 32x32, apple-touch-icon)

### ⚡ **Performances**
- ✅ Lazy loading des composants lourds
- ✅ Compression activée
- ✅ Bundle JavaScript optimisé (138 KB First Load)
- ✅ Images optimisées pour le web
- ✅ SWC Minifier activé

### ♿ **Accessibilité**
- ✅ ARIA labels sur éléments interactifs
- ✅ Attributs `role` et `aria-label`
- ✅ Navigation au clavier améliorée
- ✅ Contraste de couleurs conforme

### 🎯 **Code Quality**
- ✅ TypeScript strict
- ✅ Composants modulaires
- ✅ Next.js App Router
- ✅ Tailwind CSS organisé
- ✅ Git initialisé avec .gitignore complet

---

## 📊 Architecture de Données

### **Pas de base de données**
- Site statique généré par Next.js
- Contenu géré dans le code (JSON pour traductions)
- Formulaire de contact via Formspree (service externe)

### **Structure de Traductions**
```
src/lib/langs/
├── fr.json  # Traductions françaises
├── en.json  # Traductions anglaises
└── transaltion.ts  # Hook useTranslate()
```

### **Assets & Images**
```
public/
├── images/
│   ├── hero.jpg  # Image de fond Hero
│   ├── logo.png  # Logo IMZ
│   ├── projects/  # Screenshots projets
│   └── sponsors/  # Logos partenaires
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

---

## 🚧 Fonctionnalités Non Encore Implémentées

### 📝 **À Faire**
- [ ] Blog/Articles section
- [ ] Système de gestion de contenu (CMS)
- [ ] Analytics (Google Analytics ou Plausible)
- [ ] Newsletter integration
- [ ] Page mentions légales
- [ ] Page politique de confidentialité
- [ ] Témoignages clients (actuellement commenté)
- [ ] Animations plus avancées (Parallax, 3D)
- [ ] Mode sombre (Dark mode)
- [ ] PWA (Progressive Web App) avec service worker
- [ ] Optimisation images WebP/AVIF
- [ ] Tests automatisés (Jest, Cypress)

### 💡 **Recommandations pour la Suite**

1. **Analytics** : Intégrer Google Analytics ou Plausible
2. **CMS** : Considérer Sanity.io ou Contentful pour gérer le contenu
3. **Formulaire** : Migrer vers un système plus robuste (Netlify Forms, SendGrid)
4. **Blog** : Ajouter une section blog avec MDX
5. **Tests** : Mettre en place des tests E2E avec Cypress
6. **CI/CD** : Automatiser les déploiements avec GitHub Actions
7. **Monitoring** : Ajouter Sentry pour le tracking d'erreurs
8. **Images** : Utiliser un CDN (Cloudinary, Cloudflare Images)

---

## 🛠️ Installation & Développement

### **Prérequis**
- Node.js 18+ 
- npm ou yarn

### **Installation**
```bash
# Cloner le repository
git clone https://github.com/isselmoumoulay/IMZ-WEB-SITE.git
cd IMZ-WEB-SITE

# Installer les dépendances
npm install
```

### **Développement Local**
```bash
# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

### **Build Production**
```bash
# Générer le build statique
npm run build

# Preview du build
npm run start
```

---

## 🚀 Déploiement sur Cloudflare Pages

### **Méthode 1 : Déploiement Automatique via GitHub**

1. **Connecter à Cloudflare Pages** :
   - Aller sur https://dash.cloudflare.com
   - Sélectionner "Workers & Pages"
   - Créer un nouveau projet depuis GitHub
   - Sélectionner le repository `IMZ-WEB-SITE`

2. **Configuration Build** :
   ```
   Build command: npm run build
   Build output directory: out
   ```

3. **Déploiement** :
   - Chaque push sur `main` déclenche un déploiement automatique

### **Méthode 2 : Déploiement Manuel**

```bash
# Build le projet
npm run build

# Installer Wrangler CLI
npm install -g wrangler

# Login Cloudflare
wrangler login

# Déployer
wrangler pages deploy out --project-name=imz-website
```

### **URLs de Production**
- **Production** : https://imz-website.pages.dev
- **Branch Previews** : https://[branch].imz-website.pages.dev

---

## 📁 Structure du Projet

```
imz/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout principal avec SEO
│   │   ├── page.tsx          # Page d'accueil (client component)
│   │   └── globals.css       # Styles globaux
│   ├── components/
│   │   ├── Hero.tsx          # Section hero
│   │   ├── Navbar.tsx        # Navigation
│   │   ├── Footer.tsx        # Pied de page
│   │   ├── PowerdBy.tsx      # Partenaires
│   │   ├── Stuff.tsx         # Services
│   │   ├── Experience.tsx    # Expérience
│   │   ├── Work.tsx          # Portfolio
│   │   ├── Team.tsx          # Équipe/Sponsors
│   │   ├── ContactForm.tsx   # Formulaire contact
│   │   └── ui/               # Composants réutilisables
│   └── lib/
│       ├── langs/            # Système de traduction
│       └── utils.ts          # Utilitaires
├── public/
│   ├── images/               # Assets images
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── next.config.mjs           # Configuration Next.js
├── tailwind.config.ts        # Configuration Tailwind
├── tsconfig.json             # Configuration TypeScript
└── package.json              # Dépendances
```

---

## 🎨 Guide d'Utilisation

### **Pour les Visiteurs**

1. **Navigation** :
   - Utilisez le menu pour accéder aux différentes sections
   - Le drapeau en haut à droite permet de changer la langue

2. **Contact** :
   - Cliquez sur "CONTACT" dans le menu ou le bouton CTA
   - Remplissez le formulaire avec vos informations
   - Cliquez sur "Envoyer"

3. **Projets** :
   - Scrollez jusqu'à la section "Portfolio"
   - Cliquez sur les projets pour voir les détails

### **Pour les Développeurs**

1. **Ajouter une Traduction** :
   ```json
   // src/lib/langs/fr.json
   {
     "nouvelle_cle": "Nouveau texte"
   }
   
   // src/lib/langs/en.json
   {
     "nouvelle_cle": "New text"
   }
   ```

2. **Utiliser dans un Composant** :
   ```tsx
   const [t] = useTranslate();
   <h1>{t("nouvelle_cle")}</h1>
   ```

3. **Ajouter un Nouveau Projet** :
   - Ajouter l'image dans `public/images/projects/`
   - Modifier `src/components/Work.tsx`

---

## 📱 Support & Contact

- **Website** : https://imz-website.pages.dev
- **GitHub** : https://github.com/isselmoumoulay/IMZ-WEB-SITE
- **Email** : [Via formulaire de contact]

---

## 📄 License

Propriété de IMZ. Tous droits réservés.

---

## 📝 Changelog

### v2.0 - 2025-02-03 (Améliorations majeures)
- ✅ SEO optimisé (Open Graph, Twitter Cards, Sitemap)
- ✅ Performances améliorées (Lazy loading, compression)
- ✅ Accessibilité renforcée (ARIA labels)
- ✅ Sécurité (10 vulnérabilités corrigées)
- ✅ Configuration Cloudflare Pages
- ✅ Git initialisé avec .gitignore

### v1.0 - 2024-07-20 (Version initiale)
- ✅ Site Next.js avec design moderne
- ✅ Multi-langue FR/EN
- ✅ Animations Framer Motion
- ✅ Formulaire de contact Formspree

---

**Dernière mise à jour** : 2025-02-03  
**Développé avec** ❤️ **par IMZ**
