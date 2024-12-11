"use client"
import React from "react"
import Image from "next/image"
import logo from "../../../../images/home/output-onlinepngtools.png"

const page = () => {
  return (
    <div className="bg-light mt-10 pb-20 border-b border-gray-200">
      <div className="lg:container mx-auto flex lg:flex-row flex-col lg:px-32 px-2 justify-center items-center">
        <section className="flex flex-col w-full lg:w-4/6 my-6 gap-8">
          <h1 className="lg:text-[2.5rem] text-lg text-gray-800">
            About GameMart
          </h1>
          <div className="text-justify leading-tight text-gray-800 text-[15px]">
            <p>
              Welcome to GameMart, your ultimate destination for all things
              gaming. As an online e-commerce gamestore, we are dedicated to
              providing gamers with a seamless shopping experience and a wide
              range of gaming products.
            </p>
            <br />
            <p>
              At GameMart, we understand the passion and excitement that gaming
              brings. Whether you're a console gamer, a PC enthusiast, or
              someone exploring the world of gaming for the first time, we have
              something for everyone. From the latest consoles and accessories
              to popular game titles and exclusive merchandise, GameMart is your
              one-stop shop for all your gaming needs.
            </p>
            <br />
            <ul className="list-disc ml-5">
              <li className="mb-2">
                <span className="font-semibold">Wide Product Selection:</span>{" "}
                Explore our extensive collection of gaming consoles,
                accessories, and games to find exactly what you need.
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  Exclusive Deals and Offers:
                </span>{" "}
                Enjoy competitive pricing and special discounts that make your
                gaming experience even better.
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  Fast and Reliable Shipping:
                </span>{" "}
                Receive your orders quickly and securely, no matter where you
                are.
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  Dedicated Customer Support:
                </span>{" "}
                Our team is here to assist you with any questions or concerns,
                ensuring a smooth shopping experience.
              </li>
            </ul>
            <br />
            <p>
              At GameMart, we're not just about selling gaming products; we're
              about building a community of gamers who share a love for this
              incredible medium. Thank you for choosing GameMart as your trusted
              gaming partner. Start exploring today and discover why we're the
              preferred choice for gamers everywhere.
            </p>
          </div>
        </section>
        <section className="flex w-full lg:w-2/6 justify-center">
          <Image src={logo} alt="GameMart logo" width={225} />
        </section>
      </div>
    </div>
  )
}

export default page
