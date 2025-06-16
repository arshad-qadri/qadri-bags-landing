"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  CheckCircle,
  ShoppingBag,
  Users,
  Truck,
  Star,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function QadriBagsLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Qadri Bags</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="School bags background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
            Trusted Since Years
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Qadri Bags</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your Trusted School Bag Manufacturer and Supplier
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Manufacturing high-quality school bags for wholesale and retail
            customers across India. Durability, comfort, and affordability in
            every bag we produce.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone className="mr-2 h-5 w-5 text-black " />
              <span className="text-black"> Contact Us</span>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              About Qadri Bags
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Qadri Bags, we specialize in manufacturing and supplying
                  high-quality school bags across India. We cater to both
                  wholesale and retail customers with the same commitment to
                  excellence.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our mission is to deliver durability, comfort, and
                  affordability in every bag we produce. We understand the needs
                  of students and parents, which drives us to create products
                  that stand the test of time.
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Commitment to Quality</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    100% Customer Satisfaction
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-gray-800">1000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </Card>
                <Card className="text-center p-6">
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-gray-800">5 Star</h3>
                  <p className="text-gray-600">Quality Rating</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of school bags designed for comfort,
              durability, and style. Perfect for students of all ages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Ergonomic Kids Backpack"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Ergonomic Kids Backpack
                </h3>
                <p className="text-gray-600 mb-4">
                  Designed with padded straps and back support for maximum
                  comfort during long school days.
                </p>
                <Badge variant="secondary">Wholesale Available</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Heavy-duty School Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Heavy-duty School Bag
                </h3>
                <p className="text-gray-600 mb-4">
                  Built to last with reinforced stitching and water-resistant
                  materials for everyday use.
                </p>
                <Badge variant="secondary">Bulk Orders</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Stylish Student Backpack"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Stylish Student Backpack
                </h3>
                <p className="text-gray-600 mb-4">
                  Modern designs that combine functionality with style, perfect
                  for older students.
                </p>
                <Badge variant="secondary">Custom Colors</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Premium School Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Premium School Bag
                </h3>
                <p className="text-gray-600 mb-4">
                  High-quality materials and superior craftsmanship for the
                  discerning customer.
                </p>
                <Badge variant="secondary">Premium Quality</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Qadri Bags?
            </h2>
            <p className="text-xl text-gray-600">
              We stand out from the competition with our commitment to quality
              and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Wholesale & Retail
              </h3>
              <p className="text-gray-600">
                We cater to both individual customers and bulk buyers with
                competitive pricing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Durable & Comfortable
              </h3>
              <p className="text-gray-600">
                Our bags are designed for long-lasting use with maximum comfort
                for students
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Affordable Pricing
              </h3>
              <p className="text-gray-600">
                Quality products at competitive prices that fit every budget
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable delivery across India with secure packaging
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to place an order or have questions? Contact us today!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Contact Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Athar Qadri</h4>
                      <p className="text-gray-600">📞 9175140401</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Arshad Qadri</h4>
                      <p className="text-gray-600">📞 8007330423</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.93162501138!2d74.59946957371498!3d16.879276583923826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230015b0c581%3A0xe2c5710210536d4f!2sQadri%20Bags%20Factory!5e0!3m2!1sen!2sin!4v1749105076689!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold">Qadri Bags</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted school bag manufacturer and supplier. Quality,
                durability, and affordability in every product.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Numbers</h4>
              <div className="space-y-2">
                <p className="text-gray-300">Athar Qadri: 9175140401</p>
                <p className="text-gray-300">Arshad Qadri: 8007330423</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Products
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Qadri Bags. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
