export default function Head() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Qadri Bags",
          url: "https://shop.arshadqadri.com",
          logo: "https://arshadqadri.com/profile.jpg",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8007330423",
            contactType: "Customer Service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Marathi"],
          },
          sameAs: [
            "https://www.linkedin.com/in/arshad-qadri/",
            "https://github.com/arshad-qadri",
          ],
        })}
      </script>
    </>
  );
}
