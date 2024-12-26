import { useEffect, useState } from "react";

function Releases() {
  const [releases, setReleases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/admin/releases"
        );
        const json = await response.json();
        const approvedReleases = json.data
          .filter((release: any) => release.status === "approved") // Filter di frontend (opsional jika sudah dilakukan di backend)
          .sort(
            (a: any, b: any) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          ) // Urutkan berdasarkan created_at secara descending
          .slice(0, 5); // Ambil 5 data terbaru
        setReleases(approvedReleases);
      } catch (error) {
        console.error("Failed to fetch releases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container relative bg-bluecard py-10 lg:py-24 mx-auto px-4 lg:px-72 flex flex-col justify-center items-center gap-6 lg:gap-12 overflow-hidden"
      id="release"
    >
      <h1
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        className="font-bold text-3xl lg:text-5xl text-white text-center leading-tight"
      >
        Latest Releases
      </h1>

      <div className="release flex items-start lg:items-center gap-7 lg:gap-24 overflow-x-auto scrollbar-hide scroll-smooth w-full">
        {releases.map((release, index) => (
          <div
            key={release.id}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay={`${500 + index * 200}`}
            className="image w-80 h-80 relative flex-shrink-0"
          >
            <img
              src={`http://127.0.0.1:9000/dashboard/storage/app/public//${release.image_file_path}`}
              alt={release.title}
              className="absolute w-full h-full object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
            <div className="content absolute bottom-0 p-6 flex flex-col -space-y-1">
              <h1 className="font-semibold text-2xl text-white">
                {release.title}
              </h1>
              <p className="font-medium text-lg text-gray-300">
                {release.artist_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Releases;
