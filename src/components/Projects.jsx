function Projects() {
  return (
    <section id="projects" className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
          أعمالنا
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* مشروع 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/400x250.png?text=Solar+Project+1"
              alt="مشروع 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                مشروع الطاقة الشمسية
              </h3>
              <p className="text-gray-600 text-sm">
                تركيب نظام طاقة شمسية كامل لمنزل أو شركة.
              </p>
            </div>
          </div>

          {/* مشروع 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/400x250.png?text=Satellite+Internet"
              alt="مشروع 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                مشروع الإنترنت الفضائي
              </h3>
              <p className="text-gray-600 text-sm">
                تغطية إنترنت عالي السرعة لأماكن نائية.
              </p>
            </div>
          </div>

          {/* مشروع 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/400x250.png?text=Battery+System"
              alt="مشروع 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">أنظمة البطاريات</h3>
              <p className="text-gray-600 text-sm">
                تركيب وصيانة أنظمة تخزين الطاقة لضمان استمرارية التشغيل.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
