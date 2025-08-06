import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
        <script>
            {` alert("Welcome to Contact page");`}
        </script>
      I am contact page
    </div>
  )
}

export default page
export const metadata = {
  title: "Facebook Contact",
  description: "contact- We can connect with the world using Facebook",
};
