function Footer() {
  return (
    <footer className="bg-navy text-white py-10 text-center">
      <h3 className="text-xl font-semibold mb-2">Smart Office</h3>

      <p className="text-white/70">
        جميع الحقوق محفوظة © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
