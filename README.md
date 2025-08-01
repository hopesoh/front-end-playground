# 🎀 Personal Website

> *"Under construction" vibes with a sprinkle of love and a whole lot of personality* ✨

Welcome to my digital playground! This is where I experiment with frontend development while creating a space that feels like a time machine back to the golden age of the internet. Think Geocities meets modern web development, but make it cute and functional.

## 🌟 What's This All About?

This is my personal website that serves multiple purposes:
- **Special Proposal Page**: A romantic surprise for my boyfriend (shh, don't tell!)
- **Music Wishlist**: A curated collection of vinyl records and CDs I'm dreaming about
- **Admin Panel**: For managing the wishlist items (because someone needs to keep track of all those records!)
- **Personal Portfolio**: Showcasing my work and interests
- **Nostalgia Trip**: A celebration of 90s web aesthetics
- **Learning Lab**: Where I practice frontend skills and experiment with design

## Versions

<details>
<summary>V1 - Github Pages</summary>
   
**Version**: '22 edition 

![screen.gif](assets%2Fimages%2Fgif%2Fscreen.gif)

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic and accessible markup
- **CSS3**: Custom styling with retro aesthetics
- **JavaScript**: Interactive elements and animations
- **Jekyll**: Static site generation (Ruby-based)

### Deployment
- **GitHub Pages**: Free hosting for static sites
- **Jekyll Integration**: Automatic builds and deployments

### Dependencies
- **Ruby**: Required for Jekyll
- **Bundler**: Dependency management
- **Jekyll 4.2**: Static site generator

## 📁 Project Structure

```
hopesoh.github.io/
├── assets/
│   ├── css/
│   │   ├── style.css          # Main styles
│   │   ├── pedido.css         # Love page styles
│   │   ├── under-construction.css
│   │   └── unica-resposta-correta.css
│   ├── images/
│   │   ├── background/        # Background images
│   │   ├── blinks/           # 90s blinking GIFs
│   │   ├── gif/              # Various GIFs
│   │   ├── icon/             # UI icons
│   │   └── social/           # Social media icons
│   └── js/
│       ├── coding-text.js    # Text animations
│       ├── hearts.js         # Heart animations
│       └── pedido.js         # Love page interactions
├── _site/                    # Jekyll build output
├── index.html               # Homepage
├── pedido.html              # Love story page
├── unica-resposta-correta.html  # Birthday page
├── construction.html         # Under construction page
├── error.html               # Error page
├── Gemfile                  # Ruby dependencies
└── README.md               # This file!
```

## 🚀 Getting Started

### Prerequisites

You'll need to have these installed:
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (for Jekyll)
- [Bundler](https://bundler.io/) (dependency management)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hopesoh/hopesoh.github.io.git
   cd hopesoh.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **Visit your site**
   Open [http://127.0.0.1:4000](http://127.0.0.1:4000) in your browser

### Expected Output
```bash
> bundle exec jekyll serve
Configuration file: none
            Source: /path/to/hopesoh.github.io
       Destination: /path/to/hopesoh.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.055 seconds.
 Auto-regeneration: enabled for '/path/to/hopesoh.github.io'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

## 🎨 Design Philosophy

This website embraces the **90s aesthetic** with a modern twist:
- **Retro GIFs**: Blinking elements, construction signs, and cute animations
- **Windows 95 Theme**: Classic interface elements and styling
- **Personal Touch**: Every element has meaning and personality
- **Responsive Design**: Works on different screen sizes
- **Accessibility**: Semantic HTML and proper alt texts

## 🌐 Deployment

This site is deployed on **GitHub Pages** and automatically builds from the main branch. Any push to the repository triggers a new deployment.

**Live Site**: [https://hopesoh.github.io](https://hopesoh.github.io)

## 🛣️ Roadmap

### ✅ Completed
- [x] Basic design and layout
- [x] Cursor effects and animations
- [x] Guestbook functionality
- [x] Windows 95 theme implementation
- [x] Love story page
- [x] Birthday celebration page
- [x] Social media integration
 
</details>


<details>
<summary>V2 - Java + Spring + JSP</summary>
   
**Version**: '24 edition 

## 🛠️ Tech Stack

- **Backend**: Spring Boot 3.4.3 with Java 21
- **Database**: MySQL with Flyway migrations
- **Security**: Spring Security with JWT authentication
- **Frontend**: JSP pages with some retro CSS styling
- **Containerization**: Docker & Docker Compose
- **Deployment**: Railway (because it's awesome!)

## 🚀 Quick Start

### Prerequisites
- Java 21
- Docker & Docker Compose
- Maven (optional, Docker handles it)

### Running Locally

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd site
   ```

2. **Start with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Main site: http://localhost:8080
   - Login: http://localhost:8080/login
   - Wishlist: http://localhost:8080/wishlist
   - Admin: http://localhost:8080/admin

### Database Access
```bash
# Connect to MySQL container
docker exec -it mysql mysql

# Or access via port 3307
mysql -h localhost -P 3307 -u root
```

## 📁 Project Structure

```
src/
├── main/
│   ├── java/com/saribeiro/website/
│   │   ├── admin/          # Admin panel controllers
│   │   ├── config/         # Security & JWT configuration
│   │   ├── dashboard/      # Home & login controllers
│   │   ├── proposal/       # Special romantic pages 💕
│   │   ├── user/          # User management
│   │   ├── wishlist/      # Vinyl wishlist functionality
│   │   └── sanitizers/    # Utility classes
│   ├── resources/
│   │   ├── static/        # CSS, JS, images (lots of retro GIFs!)
│   │   ├── webapp/        # JSP views
│   │   └── db/migration/  # Flyway migrations
│   └── test/              # Test files
```

## 🎯 Main Features

### 💿 Vinyl Wishlist
- Browse cds by status (wanted, owned, etc.)
- Filter and pagination
- Beautiful retro styling

### 🔐 Admin Panel
- Secure area to manage wishlist items
- Add, edit, and delete vinyl records
- User authentication required

### 👤 Authentication
- JWT-based login system
- Secure user management
- Role-based access control

## 🐳 Docker Configuration

The project uses a multi-stage Docker build for optimization:

```dockerfile
# Build stage
FROM maven:3.9.4-eclipse-temurin-21 as builder
# ... build process

# Runtime stage
FROM eclipse-temurin:21-jre-alpine
# ... runtime configuration
```

### Environment Variables
- `MYSQL_HOST`: Database host (default: localhost)
- `MYSQL_DATABASE`: Database name (default: wishlist)
- `JWT_SECRET`: Secret for JWT tokens
- `JWT_EXPIRATION_TIME`: Token expiration time

## 🚀 Deployment on Railway

This project is configured for Railway deployment:

1. **Connect your repository** to Railway
2. **Set environment variables**:
   - `MYSQL_HOST`: Your Railway MySQL host
   - `MYSQL_DATABASE`: Database name
   - `MYSQL_USERNAME`: Database username
   - `MYSQL_PASSWORD`: Database password
   - `JWT_SECRET`: Your JWT secret
3. **Deploy!** Railway will automatically build and deploy your app

## 🎨 Styling & Assets

The project includes a collection of retro assets:
- **90s GIFs**: From Alanis Morissette to Deftones vibes
- **Retro backgrounds**: Green grids, glitter effects
- **Custom icons**: Question marks, speakers, search icons
- **Social media icons**: GitHub, LinkedIn, Instagram, Email

## 🔧 Development

### Running Tests
```bash
mvn test
```

### Database Migrations
```bash
# Using the CLI tool
./website-cli <migrationMethod> <migrationName>
```

### Local Development
```bash
# Run with Maven
mvn spring-boot:run

# Or with Docker
docker-compose up --build
```

</details>

<details open>
<summary>V3 - Serverless front + back</summary>
   
**Version**: '25 edition 

**Availability**: [saribeiro.dev](https://www.saribeiro.dev/)

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite for lightning-fast development
- **React Router** for smooth navigation
- **Framer Motion** for beautiful animations
- **Axios** for API communication
- **Anime.js** for those extra cool effects
- **Vercel Analytics** to see who's visiting

### Backend
- **Spring Boot 3.4.4** with Java 21
- **Spring Security** with JWT authentication
- **Spring Data JPA** for database operations
- **MySQL** as the database (serverless for cost efficiency)
- **Flyway** for database migrations
- **Bucket4j** for rate limiting
- **Railway** for deployment

## 🚀 Getting Started

### Prerequisites
- Java 21
- Node.js 18+
- MySQL database

### Backend Setup
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:8080`.

## 📱 Main Features

### 🏠 Home Page
The landing page with all the retro vibes and personal touches.

### 💿 Wishlist
A curated collection of vinyl records and CDs I'm dreaming about. Each item has details like artist, album, and current status.

### 🔐 Admin Panel 
- **Dashboard**: Overview of all wishlist items
- **Create Items**: Add new records to the wishlist
- **Edit Items**: Update existing items with new information

### 🔑 Authentication
- JWT-based authentication system
- Protected routes for sensitive pages
- Rate limiting to prevent abuse

## 🎨 Design Philosophy

This website embraces the aesthetic of the 90s internet with:
- Retro GIFs and animations
- Nostalgic color schemes
- Playful interactions
- Heart-shaped cursors
- Error pages with personality

## 📊 Performance & Usage

The project has been optimized for both performance and cost:

### Before (Old Stack)
- Java + Spring + JSP
- Traditional server setup

### After (Current Stack)
- Java + Spring + React + Vite
- MySQL Serverless
- Deployed on Vercel (frontend) + Railway (backend)

<img width="1826" height="512" alt="usage-by-project" src="https://github.com/user-attachments/assets/1b5b41a7-fe09-4f29-bc93-57d55fd51e61" />

## 🌐 Deployment

- **Frontend**: Deployed on Vercel for fast global CDN
- **Backend**: Deployed on Railway for reliable serverless hosting
- **Database**: MySQL serverless for cost efficiency

## 🔧 Development

### Project Structure
```
website-react/
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── assets/        # CSS, images, etc.
│   └── public/            # Static assets
└── backend/           # Spring Boot application
    ├── src/main/java/
    │   └── com/saribeiro/website_react/
    │       ├── config/        # Security and configuration
    │       ├── user/          # User management
    │       ├── wishlist/      # Wishlist functionality
    │       └── admin/         # Admin features
    └── src/main/resources/    # Application properties and migrations
```

</details>


## 📞 Contact

**Sonia A. Ribeiro**
- 🐦 Twitter: [@ar__sonia](https://twitter.com/ar__sonia)
- 📧 Email: [saribeiro.me@gmail.com](mailto:saribeiro.me@gmail.com)
- 💼 LinkedIn: [Sonia Alves Ribeiro](https://www.linkedin.com/in/sonia-alves-ribeiro/)
- 🐙 GitHub: [@hopesoh](https://github.com/hopesoh)

## 🙏 Acknowledgments

This project wouldn't be possible without these amazing resources and inspirations:

- **[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)** - Free hosting for static sites
- **[Jekyll](https://jekyllrb.com/)** - Static site generator
- **[Neocities](https://neocities.org/browse)** - Inspiration for personal websites
- **[sadgrl](https://sadgrl.online/webmastery/layouts/)** - Amazing backgrounds and layouts
- **[99 gif shop](https://99gifshop.neocities.org/)** - Cute GIFs and retro elements
- **[Wayback Machine](https://archive.org/web)** - Nostalgia and inspiration
- **[Cool text](https://cooltext.com/)** - Text effects and generators
- **[Free website hit counter](https://www.free-website-hit-counter.com/)** - Visitor tracking
- **[mf2fm](https://www.mf2fm.com/rv/)** - Cursor and text effects
- **[Wikihow](https://www.wikihow.com/Make-a-Website-Like-the-90s)** - General 90s web ideas
- **[1j01](https://github.com/1j01/98?tab=readme-ov-file)** - Great Windows 95 ideas
- **[cursor](https://cursor.com/?from=home)**, it ONLY helped me with documentation, 'cause I'm lazy.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Made with 💖, lots of patience, and a sprinkle of 90s nostalgia*

**Last Updated**: 2025  
**Status**: Under construction (always!) 🚧
