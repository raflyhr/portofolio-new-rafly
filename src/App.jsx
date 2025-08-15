import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="beranda">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>kode yang indah, lahir dari kedisplinan seseorang.🧑‍💻</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            hi, saya Rafly Hermansyah
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming, khususnya pada
            pembuatan Website. Walaupun saya baru mulai mempelajarinya selama 1
            bulan, saya memiliki semangat besar untuk terus berkembang di bidang
            ini.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#prestasi"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Prestasi <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* Tentang Section */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-2/4 md:w-2/3 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            "Hi, perkenalkan saya Rafly Hermansyah, seorang calon Full Stack Web
            Developer yang fokus pada pengembangan website fungsional dan
            user-friendly. Saya percaya bahwa sebuah website tidak hanya harus
            terlihat menarik, tetapi juga memberikan pengalaman yang nyaman dan
            bermanfaat bagi penggunanya. Saat ini saya terus mengasah
            keterampilan coding dan membangun proyek nyata untuk mengembangkan
            kemampuan saya di dunia pengembangan web."
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  3 <span className="text-blue-500">+</span>
                </h1>
                <p>proyek sederhana</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-blue-500">+</span>
                </h1>
                <p>bulan pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="tools mt-12">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            website ataupun design
          </p>
        </div>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
            >
              <img
                src={tool.gambar}
                alt="tools image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-500"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prestasi Section */}
      <div className="proyek mt-32 py-10" id="prestasi">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Prestasi
        </h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Berikut adalah pencapaian yang telah saya raih.
        </p>
        <div className="proyek-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="proyek image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak Section */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Mari terhubung dengan saya.
        </p>
       <form
  action="https://formsubmit.co/raflyhermansyah565@gmail.com"
  method="POST"
  className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
  autoComplete="off"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="500"
  data-aos-once="true"
  onSubmit={() => alert("Pesan terkirim!")} // alert tanpa mengubah form submit
>
  <input type="hidden" name="_captcha" value="false" />

  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Nama Lengkap</label>
      <input
        type="text"
        name="nama"
        placeholder="Masukkan Nama..."
        className="border border-zinc-500 p-2 rounded-md"
        required
      />
    </div>

    <div className="flex flex-col gap-2">
      <label className="font-semibold">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Masukkan Email..."
        className="border border-zinc-500 p-2 rounded-md"
        required
      />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="pesan" className="font-semibold">Pesan</label>
      <textarea
        name="pesan"
        id="pesan"
        cols="45"
        rows="7"
        placeholder="pesan..."
        className="border border-zinc-500 p-2 rounded-md"
        required
      ></textarea>
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-blue-600"
      >
        Kirim Pesan
      </button>
    </div>
  </div>
</form>


      </div>
    </>
  );
}

export default App;
