<h1 align="center">
  <br>
  <a href="https://airquest.xyz/"><img src="https://airquest.xyz/logo.png" alt="Airquest" width="200"></a>
  <br>
  Airquest
  <br>
</h1>

<h4 align="center"> 
    AirQuest is a platform designed to introduce and promote the new blockchain, AirDAO, through user engagement facilitated by interactive quests. The primary objective of AirQuest is to drive the growth and adoption of AirDAO by engaging users in activities that familiarize them with the blockchain.
</h4>

<p align="center">
 <a href="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
      <img src="https://strapi.dhiwise.com/uploads/Next_JS_Forms_and_Mutations_with_App_Router_OG_Image_e2f9eb6a40.webp" width =54 >
  </a>
  <a href="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
         alt="Gitter">
  </a>
  <a href="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"></a>
 
 
</p>

<p align="center">
  <a href="#getting-started">Getting started</a> •
  <a href="#build-and-run">Build and Run</a> •
  <a href="#tech-stack">TechStack</a> •
  <a href="#structure">Structure</a> •
  <a href="#environment">Environment</a> •
  <a href="#version">Version</a> •
  <a href="#author">Author</a> 
</p>

## 🚀 Getting Started

#### ⚙️ Prepare the environment

1. Make sure you have [Node.js](https://nodejs.org/) installed, preferably with [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/). Ensure that your Node.js version is **20.0.0 or higher**.

2. Clone this repository.

3. Install the dependencies

```bash
   yarn install
```

or

```bash
   npm install
```

## 🏁 Build and Run the Application
To build and run the application for different environments, use the following commands in the root directory of the project:

```bash
  yarn build:${env} && yarn start:${env}
```
or
```bash
  npm run build:${env} && npm run start:${env}
```
- **dev**: Development environment used during application development and testing.
- **stag**: Staging environment serves as an intermediate step between development and production.
- **main**: Production environment where the application runs in real-world scenarios, serving end-users.

For example, to build and run the application in the development environment:

```bash
  yarn build:dev && yarn start:dev
```
or
```bash
  npm run build:dev && npm run start:dev
```
This command will create an optimized build for the selected environment and then run the application with the appropriate configuration.


## 🛠️ Tech Stack

#### 💻 Languages

- HTML
- CSS
- TypeScript

#### 📚 Frameworks/Libraries

- **React.js:** Used for building user interfaces with a component-based architecture.
- **Next.js:** A React framework that provides server-side rendering, static site generation, and other features to enhance performance and SEO.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.
- **Zustand:**  A small, fast, and scalable state management library for React that simplifies state handling with minimal boilerplate.
- **Wagmi:** A React Hooks library for interacting with Ethereum, making it easier to integrate blockchain functionality into your React applications. 

## 📁 Structure

```plaintext
AIRQUEST/
│
├── .env
├── .husky/
├── .next/
├── .vscode/
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── config/
│   ├── hooks/
│   ├── provider/
│   ├── lib/
│   ├── store/
│   └── services/
├── ...
```

## 🌐 Environment

- [NEXT_PUBLIC_APP_HOST](#environment) - This is domain of project.
- [NEXT_PUBLIC_APP_URL](#environment) - This is the URL of the API that the application interacts with
- [NEXT_PUBLIC_PROJECT_ID](#environment) - This is the project ID for WalletConnect, You can obtain this ID from [https://cloud.walletconnect.com/] by creating a project.

## 📝 Version

1.0.0

## 👤 Author

Esollabs
