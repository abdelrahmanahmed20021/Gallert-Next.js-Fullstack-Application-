# Project Name: Small Gallery - Next.js Fullstack Application

## Overview

This project is a small gallery application built with Next.js as a full-stack application. It leverages Vercel for deployment and GitHub for version control. The primary purpose of this application is to allow users to upload images along with associated bios. It uses the UploadThings API for handling image uploads and Prisma with MongoDB as the database for storing image and bio data. The client-side of the application is built using React with Next.js.

## Features

- User Authentication: Users can sign up and log in to the application to access the gallery.
- Image Upload: Authenticated users can upload images along with their bio.
- Image Gallery: Display uploaded images and their associated bios in a gallery view.
- Bio Editing: Users can edit and update their bio information.
- User Profile: View user profiles and the images they have uploaded.

## Technologies Used

- **Next.js**: The framework used for building the full-stack application.
- **Vercel**: Used for deployment and hosting of the application.
- **GitHub**: Version control and project management.
- **UploadThings API**: To handle image uploads.
- **Prisma**: As an Object-Relational Mapping (ORM) tool.
- **MongoDB**: The database for storing image and bio data.
- **React**: Used for building the client-side of the application.

## Getting Started

To get started with this project, follow these steps:

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/your-username/small-gallery-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd small-gallery-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Configure Environment Variables:

   - Create a `.env.local` file in the root directory.
   - Define the following environment variables in the `.env.local` file:

     ```
     NEXT_PUBLIC_UPLOAD_THINGS_API_KEY=your_upload_things_api_key
     DATABASE_URL=your_mongodb_database_url
     SESSION_SECRET=your_session_secret
     ```

   Replace `your_upload_things_api_key`, `your_mongodb_database_url`, and `your_session_secret` with your own values.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Access the application in your web browser at `http://localhost:3000`.

## Usage

- Sign up for a new account or log in if you already have one.
- Upload images and provide associated bios.
- Explore the image gallery and view other users' uploads.
- Edit and update your bio information in your profile.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them with descriptive messages: `git commit -m "Add feature: your feature name"`.
4. Push your changes to your forked repository: `git push origin feature/your-feature-name`.
5. Create a pull request on the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, you can contact the project maintainer:

- Name: Abdelrahman Ahmed ***(Black Wolf)***
- Email: [Linkedin](https://www.linkedin.com/in/abdalrhman-ahmed-890243250/)

Thank you for using the Small Gallery application! We hope you enjoy using it and welcome your feedback and contributions.