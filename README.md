# Fundiverse

Fundiverse is a crowdfunding platform that allows creators to receive financial support from their audience. Users can contribute to their favorite creators by making payments securely through Razorpay.

## Features

- User authentication with NextAuth
- Secure payment processing via Razorpay
- Real-time supporter updates
- Profile management with customizable banners and profile pictures
- Responsive UI using Tailwind CSS

## Tech Stack

**Frontend:** Next.js, React, Tailwind CSS  
**Backend:** Next.js API routes, MongoDB (Mongoose)  
**Authentication:** NextAuth.js  
**Payments:** Razorpay API  
**Database:** MongoDB Atlas  

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/fundiverse.git
   cd fundiverse
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```sh
   GITHUB_ID=your_github_id
   GITHUB_SECRET=your_github_secret
   NEXT_PUBLIC_KEY_ID=your_razorpay_key_id
   KEY_SECRET=your_razorpay_secret
   NEXT_PUBLIC_URL=http://localhost:3000
   NEXT_AUTH_URL=http://localhost:3000
   NEXT_AUTH_SECRET=your_next_auth_secret
   ```

### Running the Project

To start the development server, run:
```sh
npm run dev  # or yarn dev
```
The app will be available at [http://localhost:3000](http://localhost:3000)
