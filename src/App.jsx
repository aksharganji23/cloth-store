export default function RajayogiClothStoreWebsite() {
  const categories = [
    {
      title: "Men's Wear",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Women's Wear",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Kids' Wear",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Traditional Wear",
      image:
        "https://images.unsplash.com/photo-1610030469668-0f9f0a2a1b88?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Casual Wear",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Seasonal Collections",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610030469668-0f9f0a2a1b88?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  ];

  const reviews = [
    "Excellent quality clothes and reasonable prices!",
    "Best clothing store in Mandamarri.",
    "Great collection for the whole family.",
  ];

  const faqs = [
    {
      q: "What types of clothing are available?",
      a: "We offer men's wear, women's wear, kids' wear, traditional wear, casual wear, and seasonal collections.",
    },
    {
      q: "Do you provide festive collections?",
      a: "Yes, we regularly update our festive and seasonal fashion collections.",
    },
    {
      q: "Where is the store located?",
      a: "Shop No. 10, Near Hanuman Temple Road, Sripathi Nagar, Mandamarri Market, Telangana – 504231.",
    },
  ];

  return (
    <div className="bg-white text-black scroll-smooth font-sans">
      <title>RAJAYOGI CLOTH STORE | Best Clothing Store in Mandamarri</title>
      <meta
        name="description"
        content="Shop quality clothing for men, women, and kids at RAJAYOGI CLOTH STORE in Mandamarri, Telangana. Affordable prices and latest fashion trends."
      />

      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-yellow-500 tracking-wide">
            RAJAYOGI CLOTH STORE
          </h1>

          <div className="hidden md:flex gap-6 text-white font-medium">
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#categories" className="hover:text-yellow-400 transition">
              Categories
            </a>
            <a href="#gallery" className="hover:text-yellow-400 transition">
              Gallery
            </a>
            <a href="#reviews" className="hover:text-yellow-400 transition">
              Reviews
            </a>
            <a href="#faq" className="hover:text-yellow-400 transition">
              FAQ
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6 max-w-4xl animate-fadeIn">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            RAJAYOGI <span className="text-yellow-500">CLOTH STORE</span>
          </h2>

          <p className="text-xl md:text-3xl text-gray-200 mb-8 font-light">
            Quality Fashion for Every Occasion
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#categories"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition duration-300"
            >
              Shop Now
            </a>

            <a
              href="tel:9912465606"
              className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-b from-white to-yellow-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-maroon-700 mb-8 text-[#6b0f1a]">
            About Us
          </h3>

          <p className="text-lg md:text-xl leading-9 text-gray-700">
            RAJAYOGI CLOTH STORE is your trusted destination for quality clothing
            for men, women, and children. We offer a wide range of traditional
            wear, casual wear, and seasonal collections at affordable prices.
          </p>
        </div>
      </section>

      <section id="categories" className="py-24 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-yellow-500 mb-4">
              Our Categories
            </h3>
            <p className="text-gray-300 text-lg">
              Fashion collections for every age and occasion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h4 className="text-2xl font-semibold text-yellow-400">
                    {category.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-[#6b0f1a] to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-yellow-400 mb-4">
              Why Choose Us
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              'Premium Quality Fabrics',
              'Affordable Prices',
              'Latest Fashion Trends',
              'Friendly Customer Service',
              'Wide Variety of Designs',
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-lg font-semibold">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-[#6b0f1a] mb-4">
              Fashion Gallery
            </h3>
            <p className="text-gray-600 text-lg">
              Explore our latest collections and festive styles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <img
                  src={img}
                  alt="Fashion Collection"
                  className="h-72 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-yellow-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-[#6b0f1a] mb-4">
              Store Hours
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto text-center space-y-4 text-lg">
            <p>
              <span className="font-bold">Monday - Saturday:</span> 9:00 AM -
              9:00 PM
            </p>
            <p>
              <span className="font-bold">Sunday:</span> 10:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-yellow-500 mb-4">
              Customer Reviews
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl p-8 shadow-lg"
              >
                <div className="text-yellow-400 text-3xl mb-4">★★★★★</div>
                <p className="text-lg italic text-gray-200">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-[#6b0f1a] mb-4">FAQ</h3>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-yellow-50 rounded-3xl p-6 shadow-md"
              >
                <h4 className="text-xl font-semibold mb-3">{faq.q}</h4>
                <p className="text-gray-700 leading-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-black to-[#6b0f1a] text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-yellow-500 mb-4">
            Subscribe to Our Newsletter
          </h3>

          <p className="text-lg text-gray-300 mb-8">
            Get updates on latest fashion collections and festive offers.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full text-black w-full md:w-96 outline-none"
            />

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-yellow-50 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-[#6b0f1a] mb-8">
              Contact Us
            </h3>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <span className="font-bold">Phone:</span> 99124 65606
              </p>

              <p>
                <span className="font-bold">Address:</span> Shop No. 10, Near
                Hanuman Temple Road, Sripathi Nagar, Mandamarri Market,
                Mancherial, Mandamarri, Telangana – 504231, India
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:9912465606"
                className="bg-[#6b0f1a] hover:bg-black text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919912465606"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Mandamarri%20Market%20Telangana&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-yellow-500 mb-4">
              RAJAYOGI CLOTH STORE
            </h4>
            <p className="text-gray-400 leading-7">
              Your trusted destination for quality fashion and affordable style
              in Mandamarri.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-yellow-500 mb-4">
              Contact
            </h4>
            <p className="text-gray-400">99124 65606</p>
            <p className="text-gray-400 mt-2 leading-7">
              Shop No. 10, Near Hanuman Temple Road, Sripathi Nagar,
              Mandamarri Market, Telangana – 504231
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-yellow-500 mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://wa.me/919912465606"
                target="_blank"
                className="hover:text-green-400 transition"
              >
                📱
              </a>

              <a href="#" className="hover:text-pink-400 transition">
                📸
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                👍
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
          © 2026 RAJAYOGI CLOTH STORE. All rights reserved.
        </div>

        <a
          href="https://wa.me/919912465606"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 animate-bounce"
        >
          💬
        </a>
      </footer>
    </div>
  );
}
