/* ============================================================
   lang-en.js — kamus bahasa Inggris untuk prototipe WASKA.
   Simpan dengan nama persis "lang-en.js" di folder yang sama dengan index.html.
   Dipasangkan dengan index.html versi "perajin" (harga, alur bayar, dan lokasi mitra sesuai proposal).
   Cara kerja: index.html memanggil window.WASKA_EN(teks) untuk tiap potongan tulisan;
   bila teks tidak dikenal, fungsi mengembalikan null dan tulisan tetap berbahasa Indonesia.
   ============================================================ */
(function(){
"use strict";

/* ---------- Nama produk, level, bulan ---------- */
var PR={"Kain 2 m":"2 m Fabric","Pouch":"Pouch","Tas Serut":"Drawstring Bag","Sling Bag":"Sling Bag","Hand Bag":"Hand Bag","Tote Bag":"Tote Bag"};
var LV={Sederhana:"Simple",Menengah:"Medium",Kompleks:"Complex"};
var MFULL={Januari:"January",Februari:"February",Maret:"March",April:"April",Mei:"May",Juni:"June",Juli:"July",Agustus:"August",September:"September",Oktober:"October",November:"November",Desember:"December"};
var MSHORT={Mei:"May",Agu:"Aug",Agt:"Aug",Okt:"Oct",Des:"Dec"};
var PW={"Terlalu lemah":"Too weak","Lemah":"Weak","Cukup":"Fair","Baik":"Good","Kuat":"Strong"};

/* ---------- Kamus teks tetap ---------- */
var D={
/* Header & menu */
"Aturan harga":"Pricing rules",
"Masuk / Daftar":"Log in / Sign up",
"Keluar":"Log out",
"Riwayat pesanan":"Order history",

/* Langkah */
"Produk":"Product","Warna":"Colour","Pratinjau 3D":"3D Preview","Poin & Harga":"Points & Price",
"Kembali":"Back","Lanjut":"Next",
"Pilih satu produk untuk lanjut.":"Choose a product to continue.",
"Pilih minimal satu motif.":"Choose at least one motif.",
"Pilih minimal satu warna.":"Choose at least one colour.",
"Buat pratinjau 3D dulu.":"Create the 3D preview first.",

/* Langkah 1: produk */
"Pilih produk":"Choose a product",
"Semua produk dibuat hanya setelah dipesan. Harga akhir ditentukan oleh poin kerumitan desain Anda.":"Every product is made only after it is ordered. The final price is set by your design's complexity points.",
"Kain 2 m":"2 m Fabric","Tas Serut":"Drawstring Bag",
"Lembar kain 2 × 1,15 m":"Fabric sheet, 2 × 1.15 m","Dompet ritsleting":"Zip pouch","Tas selempang":"Crossbody bag","Tas jinjing":"Handbag","Tas tote / hobo":"Tote / hobo bag",
"Setiap pesanan termasuk dust bag/kotak, hang tag berisi nama & makna motif, dan kartu terima kasih bertanda tangan perajin.":"Every order includes a dust bag/box, a hang tag with the motif's name & meaning, and a thank-you card signed by the artisan.",

/* Panel foto (admin) */
"Atur foto produk (admin)":"Manage product photos (admin)",
"Pasang foto produk":"Add product photos","Tutup":"Close",
"Foto pertama tiap produk menjadi foto katalog sekaligus dasar pratinjau 3D. Tekan \"Atur foto\" untuk menggeser, memperbesar, mencerahkan, dan memutihkan latar agar semua kartu seragam berlatar putih. Tambahkan foto dari sudut lain (samping, serong, belakang) agar pembeli bisa memutar produk. Setelah selesai, tekan \"Unduh HTML berisi foto\" agar foto dan pengaturannya tersimpan permanen di dalam satu file.":"The first photo of each product becomes the catalogue photo and the base for the 3D preview. Press \"Adjust photo\" to move, zoom, brighten and whiten the background so that all cards share a white background. Add photos from other angles (side, three-quarter, back) so buyers can rotate the product. When you are done, press \"Download HTML with photos\" so the photos and their settings are saved permanently in a single file.",
"Foto dari folder img/":"Photo from the img/ folder","Belum ada foto":"No photo yet","utama":"main",
"Atur foto":"Adjust photo","Tambah sudut":"Add angle","Pilih foto":"Choose photo","Hapus foto":"Delete photo",
"Selesai":"Done",
"Seret foto untuk menggeser · scroll untuk zoom. Tampilan ini sama persis dengan kartu produk.":"Drag the photo to move it · scroll to zoom. This view is exactly what the product card shows.",
"Bingkai foto":"Photo frame","Penuhi bingkai":"Fill the frame","Tampilkan utuh":"Show whole photo",
"Perbesar / perkecil":"Zoom in / out","Geser kiri ↔ kanan":"Move left ↔ right","Geser atas ↕ bawah":"Move up ↕ down","Kecerahan":"Brightness",
"Latar putih otomatis":"Automatic white background",
"Nonaktif: latar foto ditampilkan apa adanya.":"Off: the photo background is shown as it is.",
"✓ Latar sudah diputihkan otomatis.":"✓ The background has been whitened automatically.",
"Latar foto tidak terang/polos, jadi foto dibiarkan apa adanya.":"The photo background is not light/plain, so the photo is left as it is.",
"Browser mengunci foto dari folder saat file HTML dibuka langsung. Tekan \"Ganti foto utama\" lalu pilih foto yang sama agar latarnya bisa diputihkan, atau naikkan Kecerahan.":"The browser locks photos from the folder when the HTML file is opened directly. Press \"Replace main photo\" and pick the same photo so its background can be whitened, or raise the Brightness.",
"Sedang memutihkan latar…":"Whitening the background…",
"Ganti foto utama":"Replace main photo",

/* Langkah 2: motif */
"Pilih motif":"Choose motifs",
"Pilih dari 14 motif dasar yang disetujui perajin Kampung Sasirangan, atau tambahkan motif turunan. Urutan pilihan menentukan susunan lajur motif.":"Choose from 14 base motifs approved by Kampung Sasirangan artisans, or add derived motifs. The order you pick sets the order of the motif stripes.",
"14 motif dasar":"14 base motifs","Pertama 1 poin · tambahan +1":"First 1 point · each extra +1",
"Makna: dikonfirmasi perajin":"Meaning: to be confirmed with the artisan",
"Makna dikonfirmasi bersama perajin mitra":"Meaning to be confirmed with the partner artisan",
"Kewibawaan dan martabat; dahulu dipakai dalam pengobatan":"Dignity and authority; once used in healing",
"Ketajaman pikiran, dari gigi ikan haruan":"Sharpness of mind, from the teeth of the haruan (snakehead) fish",
"Persatuan, karena polanya menyambung tanpa putus":"Unity, as the pattern joins without a break",
"Keakraban dan persahabatan, dari bunga kacang panjang":"Closeness and friendship, from the long-bean flower",
"Penolak bala / kemalangan":"Wards off misfortune",
"Kesuburan":"Fertility",
"Kejujuran: yang di luar sama dengan yang di dalam":"Honesty: the outside matches the inside",
"disusun dari unsur motif dasar, diperiksa perajin":"composed from base-motif elements, checked by the artisan",
"Motif turunan (bebas)":"Derived motifs (free-form)","+2 poin / motif":"+2 points / motif",
"Komposisi bebas dari unsur motif dasar, misalnya lambang sekolah atau komunitas yang digambar ulang bergaya sasirangan. Selalu diperiksa perajin.":"A free composition of base-motif elements, for example a school or community emblem redrawn in sasirangan style. Always checked by the artisan.",
"Contoh: Lambang Himpunan Mahasiswa Manajemen":"Example: Management Students' Association emblem",
"Tambah":"Add",
"Logo atau merek pihak ketiga hanya dibuat dengan izin tertulis. Perajin berhak menolak desain yang tidak sesuai makna motif.":"Third-party logos or brands are made only with written permission. The artisan may decline a design that goes against a motif's meaning.",
"Cakupan & ukuran motif":"Motif coverage & size",
"Motif membentuk pita di bagian tertentu":"The motif forms a band on part of the product",
"Penuh seluruh permukaan":"Full surface","Motif menutupi seluruh bidang":"The motif covers the whole surface",
"Motif halus":"Fine motif","Unsur motif di bawah 3 cm atau jarak jelujur rapat":"Motif elements under 3 cm or closely spaced stitching",

/* Langkah 3: warna */
"Pilih palet warna":"Choose a colour palette",
"Palet Anda":"Your palette","Belum ada warna dipilih.":"No colours selected yet.",
"Dasar":"Base","Gradasi":"Gradient",
"Merah & merah jambu":"Reds & pinks","Jingga & kuning":"Oranges & yellows","Hijau & tosca":"Greens & teals","Biru":"Blues","Ungu":"Purples","Cokelat, netral, hitam & putih":"Browns, neutrals, black & white","Pastel":"Pastels",
"Warna racikan Anda":"Your custom colours","pastel otomatis +1":"pastel auto +1","Hapus warna racikan":"Delete custom colour",
"Cari warna… (mis. biru, maroon, sage, pastel, #2E3A78)":"Search colours… (e.g. blue, maroon, sage, pastel, #2E3A78)",
"Kode":"Code","belum ada di katalog.":"is not in the catalogue yet.","Pakai warna ini":"Use this colour",
"Warna “":"Colour “",
"” belum ada di katalog. Racik sendiri dengan pemilih warna di bawah.":"” is not in the catalogue yet. Mix your own with the colour picker below.",
"Racik warna ini":"Mix this colour",
"Racik warna sendiri":"Mix your own colour","Warna pastel otomatis +1 poin":"Pastel colours automatically +1 point",
"Tidak menemukan warna yang dicari? Pilih bebas dengan pemilih warna atau ketik kode HEX. Warna ini benar-benar dipakai di pratinjau 3D, perhitungan poin, dan dikirim ke perajin untuk diracik.":"Can't find the colour you want? Pick freely with the colour picker or type a HEX code. This colour is really used in the 3D preview and the points calculation, and is sent to the artisan to be mixed.",
"Pilih warna":"Pick a colour","Kode HEX":"HEX code","Nama warna (opsional)":"Colour name (optional)","mis. Hijau Daun Pisang":"e.g. Banana Leaf Green",
"Terdekat di katalog:":"Closest in the catalogue:",
"· bukan pastel, tanpa poin tambahan":"· not pastel, no extra points",
"(hampir sama) · bukan pastel, tanpa poin tambahan":"(almost identical) · not pastel, no extra points",
"(hampir sama) ·":"(almost identical) ·",
"terdeteksi pastel, +1 poin":"detected as pastel, +1 point",
"Kode HEX belum valid. Contoh: #2E7D5B":"The HEX code is not valid yet. Example: #2E7D5B",
"Tambah & pakai warna ini":"Add & use this colour",
"Latar gradasi":"Gradient background",
"Warna dasar memudar ke warna kedua (+1 poin, tidak bertambah jika sudah ada pastel)":"The base colour fades into the second colour (+1 point, not added again if a pastel is already used)",
"Warna di layar adalah ilustrasi. Perajin mencocokkan dengan swatch kain fisik dan uji celup; toleransi warna dicantumkan dalam ketentuan pesanan.":"Colours on screen are an illustration. The artisan matches them against physical fabric swatches and a dye test; the colour tolerance is stated in the order terms.",

/* Nama warna */
"Merah Hati":"Burgundy","Merah Cabai":"Chili Red","Marun":"Maroon","Merah Bata":"Brick Red","Merah Delima":"Crimson","Merah Jambu":"Rose Pink",
"Jingga":"Orange","Terakota":"Terracotta","Salem":"Salmon","Kuning Kunyit":"Turmeric Yellow","Kuning Emas":"Gold","Kuning Jagung":"Corn Yellow",
"Hijau Pucuk":"Lime Green","Hijau Daun":"Leaf Green","Hijau Pandan":"Pandan Green","Hijau Lumut":"Moss Green","Hijau Botol":"Bottle Green","Hijau Zaitun":"Olive Green","Hijau Sage":"Sage Green","Tosca":"Teal",
"Biru Laut":"Ocean Blue","Biru Malam":"Navy","Biru Indigo":"Indigo","Biru Benhur":"Royal Blue","Biru Denim":"Denim Blue","Biru Petrol":"Petrol Blue",
"Ungu Terong":"Eggplant","Ungu Anggur":"Grape","Ungu Kecubung":"Amethyst",
"Cokelat Tanah":"Earth Brown","Cokelat Kopi":"Coffee Brown","Cokelat Kayu":"Wood Brown","Cokelat Susu":"Latte","Krem":"Cream",
"Abu Batu":"Stone Grey","Abu Arang":"Charcoal Grey","Hitam Arang":"Charcoal Black","Putih Gading":"Ivory","Putih Kapas":"Cotton White",
"Merah Muda":"Soft Pink","Biru Langit":"Sky Blue","Kuning Lembut":"Butter Yellow","Salem Muda":"Light Salmon","Sage Muda":"Light Sage","Biru Es":"Ice Blue","Tosca Muda":"Light Teal","Aprikot":"Apricot","Vanila":"Vanilla",

/* Langkah 4: pratinjau */
"Pratinjau AI 3D":"AI 3D preview",
"AI menyusun motif dari 14 motif yang disetujui perajin, lalu memasangkannya pada model produk 3D yang bisa Anda putar. Coba gratis, tanpa bayar.":"AI arranges the motifs from the 14 artisan-approved motifs, then places them on a 3D product model you can rotate. Free to try, no payment.",
"Membaca pustaka 14 motif WASKA…":"Reading the WASKA library of 14 motifs…",
"Menjelujur & mencelup kain virtual…":"Stitching & dyeing the virtual fabric…",
"Menjahit bentuk produk 3D…":"Sewing the 3D product shape…",
"Menata cahaya studio…":"Setting up the studio lighting…",
"Pratinjau 3D · ilustrasi AI, bukan foto":"3D preview · AI illustration, not a photo",
"Seret untuk memutar · scroll / cubit untuk zoom":"Drag to rotate · scroll / pinch to zoom",
"Depan":"Front","Belakang":"Back","Putar":"Spin",
"Ilustrasi 2D · 3D tidak didukung peramban ini":"2D illustration · 3D is not supported by this browser",
"Desain berubah":"Design changed","Desain siap dirender":"Design ready to render",
"Anda mengubah pilihan. Render ulang agar pratinjau 3D sesuai desain terbaru.":"You changed your choices. Re-render so the 3D preview matches the latest design.",
"Tekan tombol di bawah untuk melihat produk Anda dalam 3D sebelum satu jahitan pun dibuat.":"Press the button below to see your product in 3D before a single stitch is made.",
"Render ulang":"Re-render","Buat pratinjau 3D":"Create 3D preview",
"Variasi lain":"Another variation","Bagikan desain":"Share design",
"Sembunyikan prompt AI":"Hide AI prompt","Lihat prompt AI":"View AI prompt",
"Perajin memeriksa & memutuskan setiap desain sebelum produksi.":"The artisan checks & decides on every design before production.",
"Foto kain jadi dikirim sebelum dijahit, untuk dicocokkan dengan pratinjau.":"A photo of the finished fabric is sent before sewing, to compare with the preview.",
"Pratinjau 3D · ilustrasi, bukan foto produk jadi":"3D preview · illustration, not a photo of the finished product",
"Geser kiri/kanan untuk memutar":"Swipe left/right to rotate",
"Lihat desain saya":"View my design","Bandingkan foto asli":"Compare with the original photo",

/* Langkah 5: poin & harga */
"Poin kerumitan & harga":"Complexity points & price",
"Harga ditetapkan oleh poin, bukan tawar-menawar. Perajin mengonfirmasi level saat memeriksa desain.":"The price is set by points, not by bargaining. The artisan confirms the level when checking the design.",
"Desain di atas 12 poin: perlu konsultasi perajin":"Designs above 12 points: artisan consultation needed",
"Sesuai aturan WASKA, desain sangat rumit dikonsultasikan dulu dengan perajin sebelum harga diberikan. Anda dapat mengajukan konsultasi di langkah berikutnya, atau mengurangi motif/warna agar harga langsung muncul.":"Under WASKA's rules, very complex designs are discussed with the artisan before a price is given. You can request a consultation in the next step, or reduce the motifs/colours so the price appears right away.",
"Dibayar":"Paid","lunas":"in full",
"Bagaimana harga dihitung":"How the price is calculated",
"Ongkos jahit":"Sewing fee","Kemasan":"Packaging","HPP":"COGS",
"Ke mana uang Anda mengalir":"Where your money goes",
"Perajin:":"Artisan:","Penjahit:":"Tailor:","Kemasan:":"Packaging:","Pajak 0,5%:":"Tax 0.5%:",
"Rincian poin":"Points breakdown",
"Motif dasar pertama":"First base motif",
"Pastel & gradasi":"Pastel & gradient","Warna gradasi":"Gradient colour","Warna pastel":"Pastel colour",
"Motif penuh seluruh permukaan":"Motif over the full surface",
"Motif halus (< 3 cm / jelujur rapat)":"Fine motif (< 3 cm / close stitching)",
"Sederhana":"Simple","Menengah":"Medium","Kompleks":"Complex",
"Yang Anda terima":"What you receive",
"Dust bag / kotak kemasan":"Dust bag / packaging box",
"Hang tag berisi nama & makna motif":"Hang tag with the motif's name & meaning",
"Kartu terima kasih bertanda tangan perajin":"Thank-you card signed by the artisan",
"Perbaikan gratis jika ada cacat pengerjaan":"Free repair for any workmanship defect",

/* Langkah 6: kirim desain / konsultasi */
"Ajukan konsultasi":"Request a consultation",
"Memesan sebagai":"Ordering as","Anda belum masuk.":"You are not logged in.",
"Akun diperlukan saat menekan tombol kirim konsultasi. Desain & isian Anda tetap tersimpan.":"An account is needed when you press the consultation button. Your design and details stay saved.",
"Nama":"Name","Nama lengkap":"Full name","Catatan untuk perajin":"Note for the artisan",
"Kirim permintaan konsultasi":"Send consultation request",
"Isi nama dan nomor WhatsApp.":"Fill in your name and WhatsApp number.",
"Data pemesan":"Your details","Pengiriman":"Delivery",
"Antar dalam kota: Banjarmasin":"City delivery: Banjarmasin","Antar dalam kota: Banjarbaru":"City delivery: Banjarbaru",
"Kurir (luar kota / luar negeri)":"Courier (other cities / overseas)",
"Tarif kurir":"Courier rate","Gratis":"Free",
"Harga produk":"Product price","Ongkir":"Delivery fee",
"Konsultasi":"Consultation",

/* Ringkasan */
"Ringkasan desain":"Design summary","harga langsung":"live price","Belum memilih produk":"No product chosen yet",
"Poin kerumitan":"Complexity points",
"Poin muncul saat Anda menambah motif & warna.":"Points appear as you add motifs & colours.",
"Pilih produk untuk melihat harga.":"Choose a product to see the price.",
"Mulai dari":"From","Di atas 12 poin":"Above 12 points","Konsultasi perajin":"Artisan consultation",
"AI mengusulkan, perajin memutuskan, pembeli menyetujui. Tidak ada kain dipotong sebelum pembayaran diterima dan desain final disetujui.":"AI proposes, the artisan decides, the buyer approves. No fabric is cut before payment is received and the final design is approved.",

/* Konsultasi terkirim */
"Permintaan konsultasi terkirim":"Consultation request sent","Buat desain baru":"Create a new design",

/* Masuk / daftar */
"Masuk ke akun":"Log in to your account",
"Gunakan nomor WhatsApp atau email yang terdaftar.":"Use your registered WhatsApp number or email.",
"Masukkan nomor WhatsApp atau email.":"Enter your WhatsApp number or email.",
"Masukkan password.":"Enter your password.",
"Nomor/email atau password salah. Coba lagi atau daftar akun baru.":"Wrong number/email or password. Try again or sign up for a new account.",
"No. WhatsApp atau email":"WhatsApp number or email","No. WhatsApp (08xxxxxxxxxx)":"WhatsApp number (08xxxxxxxxxx)","Ulangi password":"Repeat password",
"Tampilkan password":"Show password","Sembunyikan password":"Hide password",
"Lupa password?":"Forgot password?",
"MASUK":"LOG IN","MASUK & KIRIM KONSULTASI":"LOG IN & SEND CONSULTATION",
"ATAU":"OR","Akun demo prototipe":"Prototype demo account","Isi otomatis":"Autofill",
"Baru di WASKA?":"New to WASKA?","Daftar sekarang":"Sign up now",
"Buat akun baru":"Create a new account",
"Gratis. Kode verifikasi dikirim lewat WhatsApp.":"Free. A verification code is sent via WhatsApp.",
"Minimal 8 karakter berisi huruf dan angka.":"At least 8 characters, with letters and numbers.",
"Saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi WASKA, termasuk dihubungi lewat WhatsApp terkait pesanan.":"I agree to WASKA's Terms & Conditions and Privacy Policy, including being contacted via WhatsApp about my order.",
"DAFTAR":"SIGN UP","Sudah punya akun?":"Already have an account?","Masuk":"Log in","Daftar":"Sign up",
"Nama minimal 3 huruf.":"Name must be at least 3 letters.",
"Nomor WhatsApp tidak valid (contoh 081234567890).":"Invalid WhatsApp number (example 081234567890).",
"Nomor ini sudah terdaftar. Silakan masuk.":"This number is already registered. Please log in.",
"Format email tidak valid.":"Invalid email format.",
"Email ini sudah terdaftar. Silakan masuk.":"This email is already registered. Please log in.",
"Minimal 8 karakter, berisi huruf dan angka.":"At least 8 characters, with letters and numbers.",
"Konfirmasi password tidak sama.":"The passwords do not match.",
"Setujui syarat & ketentuan untuk melanjutkan.":"Agree to the terms & conditions to continue.",
"Ubah data":"Edit details","Verifikasi nomor WhatsApp":"Verify your WhatsApp number",
"Masukkan 6 digit kode yang kami kirim ke":"Enter the 6-digit code we sent to",
"Kode OTP salah. Periksa kembali 6 digit kode.":"Wrong OTP code. Check the 6 digits again.",
"Prototipe: WhatsApp tidak benar-benar dikirim. Kode demo Anda:":"Prototype: no WhatsApp message is actually sent. Your demo code:",
"VERIFIKASI & BUAT AKUN":"VERIFY & CREATE ACCOUNT",
"Tidak menerima kode?":"Didn't get the code?","Kirim ulang":"Resend",
"Satu langkah lagi sebelum konsultasi":"One more step before your consultation",
"Desain Anda tersimpan dan tidak akan hilang.":"Your design is saved and will not be lost.",
"Desainmu, dijelujur tangan perajin Banjar.":"Your design, hand-stitched by Banjar artisans.",
"Simpan desain & lacak pesanan":"Save designs & track orders",
"Kabar progres perajin lewat WhatsApp":"Artisan progress updates via WhatsApp",
"Data akun hanya tersimpan selama sesi ini.":"Account data is kept only for this session.",

/* Lacak pesanan */
"Lacak pesanan":"Track order","Desain baru":"New design",
"Perajin mitra":"Partner artisan","Pembeli":"Buyer","Tim WASKA (COO)":"WASKA team (COO)","Penjahit mitra":"Partner tailor","Tim WASKA":"WASKA team",
"Apakah desain dapat dijelujur dan sesuai makna motif?":"Can the design be stitched, and does it respect the motif's meaning?",
"Perajin menyetujui desain tanpa perubahan. Setujui desain final?":"The artisan approved the design with no changes. Approve the final design?",
"Periksa kerapian garis motif, ketahanan warna, dan ukuran kain.":"Check the neatness of the motif lines, the colour fastness and the fabric size.",
"Produk jadi dan sudah lunas. Kemas pesanan.":"The product is finished and paid in full. Pack the order.",
"Setujui tanpa perubahan":"Approve with no changes","Usulkan penyesuaian":"Propose an adjustment",
"Setujui desain final":"Approve the final design","Minta revisi":"Request a revision",
"Kain selesai → kirim foto & QC":"Fabric finished → send photo & QC",
"Lolos QC":"Passed QC","Tidak lolos QC":"Failed QC",
"Tas selesai dijahit":"Bag finished sewing","Kemas & siap kirim":"Pack & ready to ship",
"Metode pembayaran":"Payment method","Transfer bank":"Bank transfer",
"Ukuran motif halus dinaikkan sedikit (± 3 cm) agar garis jelujur tetap rapi.":"The fine motif size is raised slightly (± 3 cm) so the stitch lines stay neat.",
"Jarak antar-lajur motif diperlebar ± 1 cm agar pewarnaan merata.":"The gap between motif stripes is widened by ± 1 cm so the dye spreads evenly.",
"Pesanan selesai":"Order completed",
"Lacak pengiriman":"Track delivery","No. resi (simulasi):":"Tracking no. (simulation):",
"Dikemas":"Packed","Dikirim":"Shipped","Diterima":"Received",
"Alur pesanan · 6 langkah, 2 keputusan":"Order flow · 6 steps, 2 decisions",
"Pembeli mendesain":"The buyer designs","Pratinjau AI 3D & harga tetap":"AI 3D preview & fixed price",
"Perajin memeriksa desain":"The artisan checks the design",
"Boleh menyesuaikan · pembeli menyetujui desain final":"May adjust · the buyer approves the final design",
"Pembeli membayar lunas":"The buyer pays in full",
"Kain tidak perlu dijahit":"The fabric needs no sewing",
"sedang berjalan":"in progress",
"◆ Keputusan: pembeli menyetujui desain final? Tidak → perajin & pembeli merevisi":"◆ Decision: does the buyer approve the final design? No → the artisan & buyer revise",
"Catatan aktivitas":"Activity log",
"Pembeli meminta revisi; desain dikembalikan ke perajin.":"The buyer requested a revision; the design goes back to the artisan.",
"Tidak lolos QC (contoh: garis motif kurang rapi). Dikembalikan ke perajin untuk diperbaiki tanpa biaya tambahan.":"Failed QC (example: motif lines not neat enough). Returned to the artisan to be fixed at no extra cost.",
"Pesanan dikemas dengan dust bag, hang tag, dan kartu terima kasih.":"The order is packed with a dust bag, hang tag and thank-you card.",
"Arus kas pesanan":"Order cash flow",
"Uang masuk dari pembeli & pembayaran ke mitra":"Money in from the buyer & payments to partners",
"Pembayaran lunas dari pembeli":"Full payment from the buyer",
"Biaya payment gateway 2%":"Payment gateway fee 2%","PPh final 0,5%":"Final income tax 0.5%",
"Kain ini dijelujur dan dicelup dengan tangan khusus untuk Anda. Semoga motifnya membawa makna baik.":"This fabric was stitched and dyed by hand especially for you. May its motifs bring good meaning.",

/* Status pesanan & riwayat */
"Menunggu pemeriksaan perajin":"Awaiting artisan review","Menunggu persetujuan desain":"Awaiting design approval",
"Sedang dibuat perajin":"Being made by the artisan","Pemeriksaan mutu":"Quality check","Sedang dijahit":"Being sewn",
"Siap dikemas":"Ready to pack","Dalam pengiriman":"In delivery","Dibatalkan":"Cancelled",
"Lihat detail":"View details","Belum ada pesanan":"No orders yet","Mulai mendesain":"Start designing",

/* Panel aturan harga */
"Panel CFO":"CFO panel","Aturan poin & daftar harga":"Points rules & price list",
"Tiap motif dasar tambahan":"Each additional base motif","Tiap motif turunan (bebas)":"Each derived (free-form) motif",
"Warna sampai 2":"Up to 2 colours","Tiap warna di atas 2":"Each colour above 2","Warna pastel atau gradasi":"Pastel or gradient colour",
"Warna racikan sendiri dihitung seperti warna lain; bila terdeteksi pastel otomatis +1. Desain di atas 12 poin → konsultasi perajin sebelum harga diberikan. Bobot ditinjau tiap 6 bulan bersama perajin.":"Custom-mixed colours are counted like any other colour; if detected as pastel, +1 automatically. Designs above 12 points → artisan consultation before a price is given. Weights are reviewed every 6 months with the artisans.",
"Kain":"Fabric",

/* Pesan singkat (toast) */
"Kode HEX tidak valid. Contoh: #2E7D5B":"Invalid HEX code. Example: #2E7D5B",
"Warna disimpan, tetapi palet sudah 6 warna. Hapus satu warna dulu.":"Colour saved, but the palette already has 6 colours. Remove one colour first.",
"Palet sudah 6 warna.":"The palette already has 6 colours.",
"Maksimal 3 motif turunan.":"Maximum 3 derived motifs.",
"Maksimal 6 motif dasar per desain.":"Maximum 6 base motifs per design.",
"Maksimal 6 warna.":"Maximum 6 colours.",
"Warna racikan dihapus.":"Custom colour deleted.",
"Pratinjau 3D tidak tersedia di peramban ini, ditampilkan versi 2D.":"The 3D preview is not available in this browser; showing the 2D version.",
"Tautan desain disalin (simulasi). Bagikan ke teman!":"Design link copied (simulation). Share it with friends!",
"Simulasi: tautan atur ulang password dikirim ke WhatsApp/email Anda.":"Simulation: a password reset link was sent to your WhatsApp/email.",
"Anda telah keluar dari akun.":"You have logged out.",
"File bahasa Inggris (lang-en.js) belum diunggah ke folder yang sama.":"The English language file (lang-en.js) has not been uploaded to the same folder.",
"Pengaturan foto disimpan. Tekan \"Unduh HTML berisi foto\" agar tersimpan permanen.":"Photo settings saved. Press \"Download HTML with photos\" to keep them permanently.",
"Pengaturan foto dikembalikan ke awal.":"Photo settings reset.",
"Pilih file gambar (jpg/png/webp).":"Choose an image file (jpg/png/webp).",
"Gambar tidak bisa dibaca.":"The image could not be read.",
"index.html berisi pengaturan foto sedang diunduh.":"index.html with the photo settings is being downloaded.",
"Foto dihapus.":"Photo deleted."
};

/* ---------- Tahap pengiriman: judul, keterangan, dan catatan aktivitasnya ---------- */
var SHIP=[
["Pesanan sedang disiapkan","Order being prepared"],
["Tim WASKA mengemas pesanan dengan dust bag, hang tag, dan kartu terima kasih","The WASKA team packs the order with a dust bag, hang tag and thank-you card"],
["Paket telah diterima","Parcel received"],
["Pesanan selesai, terima kasih sudah memesan di WASKA","Order complete, thank you for ordering from WASKA"],
["Paket diserahkan ke kurir","Parcel handed to the courier"],
["Kurir mengambil paket dari WASKA, Banjarmasin","The courier collected the parcel from WASKA, Banjarmasin"],
["Paket tiba di gudang sortir","Parcel arrived at the sorting hub"],
["Gudang sortir Banjarmasin","Banjarmasin sorting hub"],
["Paket dalam perjalanan ke kota tujuan","Parcel on its way to the destination city"],
["Diberangkatkan dari gudang sortir Banjarmasin","Dispatched from the Banjarmasin sorting hub"],
["Paket dibawa kurir ke alamat Anda","Parcel out for delivery to your address"],
["Kurir sedang menuju alamat tujuan","The courier is heading to the delivery address"],
["Pesanan siap diambil","Order ready for pickup"],
["Silakan ambil sesuai jadwal yang disepakati","Please collect it at the agreed time"],
["Pesanan telah diambil","Order collected"],
["Paket diambil pengantar","Parcel picked up by the deliverer"],
["Anggota tim WASKA mengambil paket untuk diantar","A WASKA team member picked up the parcel for delivery"],
["Paket dalam perjalanan ke alamat Anda","Parcel on its way to your address"]
];
SHIP.forEach(function(p){D[p[0]]=p[1];});
/* pasangan judul + keterangan yang muncul sebagai satu kalimat di catatan aktivitas */
var PAIRS=[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,3],[15,16]];
PAIRS.forEach(function(x){D[SHIP[x[0]][0]+". "+SHIP[x[1]][0]+"."]=SHIP[x[0]][1]+". "+SHIP[x[1]][1]+".";});
["Antar dalam kota: Banjarmasin","Antar dalam kota: Banjarbaru"].forEach(function(l){
  D["Paket dalam perjalanan ke alamat Anda. "+l+"."]="Parcel on its way to your address. "+D[l]+".";
});

/* ---------- Pembantu ---------- */
function has(k){return Object.prototype.hasOwnProperty.call(D,k);}
function t(x){return has(x)?D[x]:x;}
function P(x){return PR[x]||x;}
function pts(n){return n==="1"||n===1?"1 point":n+" points";}
function note(x){
  if(has(x))return D[x];
  var m=x.match(/^Motif turunan “(.+)” disederhanakan agar dapat dijelujur dengan tangan\.$/);
  return m?"The derived motif “"+m[1]+"” is simplified so it can be stitched by hand.":x;
}

/* ---------- Pola untuk teks yang berisi angka atau nama ---------- */
var RX=[
[/^Langkah (\d) dari 6$/,function(m){return"Step "+m[1]+" of 6";}],
[/^Riwayat pesanan \((\d+)\)$/,function(m){return"Order history ("+m[1]+")";}],
[/^Warna pertama menjadi warna dasar celupan, berikutnya untuk motif\. Dua warna pertama gratis; tiap warna tambahan \+1 poin \(maksimal 6\)\. Tersedia (\d+) warna celup, atau racik warna Anda sendiri\.$/,function(m){return"The first colour becomes the base dye colour, the next ones are for the motifs. The first two colours are free; each extra colour is +1 point (maximum 6). "+m[1]+" dye colours are available, or mix your own.";}],
[/^Desain Anda (\d+) poin \(di atas 12\)\. Perajin akan menghubungi Anda untuk membahas kelayakan dan harga\.$/,function(m){return"Your design is "+m[1]+" points (above 12). The artisan will contact you to discuss feasibility and price.";}],
[/^\+(\d+) poin$/,function(m){return"+"+pts(m[1]);}],
[/^(\d+–\d+|\d+\+) poin$/,function(m){return m[1]+" points";}],
[/^(\d+) poin$/,function(m){return pts(m[1]);}],
[/^(\d+) poin · (.+)$/,function(m){return pts(m[1])+" · "+t(m[2]);}],
[/^Motif dasar tambahan × (\d+)$/,function(m){return"Additional base motifs × "+m[1];}],
[/^Motif turunan × (\d+)$/,function(m){return"Derived motifs × "+m[1];}],
[/^(\d+) warna \(2 pertama gratis\)$/,function(m){return m[1]+(m[1]==="1"?" colour":" colours")+" (first 2 free)";}],
[/^(\d+) warna \((\d+) di atas 2\)$/,function(m){return m[1]+" colours ("+m[2]+" above 2)";}],
[/^Harga tetap · level (Sederhana|Menengah|Kompleks)$/,function(m){return"Fixed price · "+LV[m[1]]+" level";}],
[/^Harga tetap · (Sederhana|Menengah|Kompleks)$/,function(m){return"Fixed price · "+LV[m[1]];}],
[/^Estimasi (\d+)–(\d+) hari \((kain \+ jahit|kain)\)$/,function(m){return"Estimated "+m[1]+"–"+m[2]+" days ("+(m[3]==="kain"?"fabric":"fabric + sewing")+")";}],
[/^(\d+)–(\d+) hari$/,function(m){return m[1]+"–"+m[2]+" days";}],
[/^× (\d+),(\d+)$/,function(m){return"× "+m[1]+"."+m[2];}],
[/^\((\d+),(\d)%\)$/,function(m){return"("+m[1]+"."+m[2]+"%)";}],
[/^(\d+),(\d+) m$/,function(m){return m[1]+"."+m[2]+" m";}],
[/^(Sederhana|Menengah|Kompleks) \((.+) poin\)$/,function(m){return LV[m[1]]+" ("+m[2]+" points)";}],
[/^HPP (Rp[\d.]+)$/,function(m){return"COGS "+m[1];}],
[/^Motif turunan “(.+)”$/,function(m){return"Derived motif “"+m[1]+"”";}],
[/^: (.+)$/,function(m){return": "+t(m[1]);}],
[/^(\d+)\. (.+)$/,function(m){return m[1]+". "+t(m[2]);}],
[/^(\d+) foto$/,function(m){return m[1]+(m[1]==="1"?" photo":" photos");}],
[/^Unduh HTML berisi foto \((\d)\/6 produk\)$/,function(m){return"Download HTML with photos ("+m[1]+"/6 products)";}],
[/^Atur foto katalog: (.+)$/,function(m){return"Adjust catalogue photo: "+P(m[1]);}],
[/^(\d+) foto (.+) ditambahkan\.$/,function(m){return m[1]+" "+P(m[2])+" photo(s) added.";}],
[/^Foto utama (.+) diganti\.$/,function(m){return"Main photo for "+P(m[1])+" replaced.";}],
[/^“(.+)” sudah ada di palet Anda\.$/,function(m){return"“"+t(m[1])+"” is already in your palette.";}],
[/^“(.+)” ditambahkan ke palet( \(pastel \+1 poin\))?\.$/,function(m){return"“"+t(m[1])+"” added to the palette"+(m[2]?" (pastel +1 point)":"")+".";}],
[/^Kode OTP \(simulasi\) dikirim ke WhatsApp: (\d+)$/,function(m){return"OTP code (simulation) sent to WhatsApp: "+m[1];}],
[/^Kode OTP baru \(simulasi\): (\d+)$/,function(m){return"New OTP code (simulation): "+m[1];}],
[/^Akun dibuat\. Selamat datang, (.+)!$/,function(m){return"Account created. Welcome, "+m[1]+"!";}],
[/^Selamat datang kembali, (.+)!$/,function(m){return"Welcome back, "+m[1]+"!";}],
[/^Pratinjau dibuat sesi ini: (\d+)\. Anggaran AI tahun 1: ±1\.000 gambar\/bulan\.$/,function(m){return"Previews made this session: "+m[1]+". Year 1 AI budget: ±1,000 images/month.";}],
[/^Kekuatan password: (.+)$/,function(m){return"Password strength: "+(PW[m[1]]||m[1]);}],
[/^Terima kasih, (.+)\. Desain (\d+) poin Anda telah diteruskan ke perajin mitra\. Tim WASKA akan menghubungi (.+) lewat WhatsApp untuk membahas kelayakan dan harga\.$/,function(m){return"Thank you, "+m[1]+". Your "+m[2]+"-point design has been passed to a partner artisan. The WASKA team will contact "+m[3]+" via WhatsApp to discuss feasibility and price.";}],
[/^(.+) · (Sederhana|Menengah|Kompleks) · (\d+) poin · (Rp[\d.]+) \(lunas\) · dikerjakan (.+) \(antrean terendah\) · akun (.+)$/,function(m){return P(m[1])+" · "+LV[m[2]]+" · "+m[3]+" points · "+m[4]+" (paid in full) · made by "+m[5]+" (shortest queue) · account "+m[6];}],
[/^Simulasi alur · giliran: (.+)$/,function(m){return"Flow simulation · turn: "+t(m[1]);}],
[/^Perajin mengusulkan: (.+) Setujui desain final\?$/,function(m){return"The artisan proposes: "+note(m[1])+" Approve the final design?";}],
[/^Kain sedang dijelujur dan dicelup( \(perbaikan\))?\.$/,function(m){return"The fabric is being stitched and dyed"+(m[1]?" (rework)":"")+".";}],
[/^Menjahit (.+) beserta lapisan, ritsleting, dan tali\.$/,function(m){return"Sewing the "+P(m[1])+" with its lining, zip and straps.";}],
[/^Bayar lunas (Rp[\d.]+)$/,function(m){return"Pay "+m[1]+" in full";}],
[/^Perbarui status: (.+)$/,function(m){return"Update status: "+t(m[1]);}],
[/^Hasil akhir pesanan ini: perajin (Rp[\d.]+), (?:penjahit (Rp[\d.]+), )?sisa untuk WASKA$/,function(m){return"Final result of this order: artisan "+m[1]+", "+(m[2]?"tailor "+m[2]+", ":"")+"remainder for WASKA";}],
[/^Ongkos jahit (Rp[\d.]+)$/,function(m){return"Sewing fee "+m[1];}],
[/^◆ Keputusan: lolos QC\? Tidak → diperbaiki tanpa biaya(?: \(sudah (\d+)×\))?$/,function(m){return"◆ Decision: passed QC? No → fixed at no cost"+(m[1]?" (already "+m[1]+"×)":"");}],
[/^Desain dikirim ke (.+) untuk diperiksa \(antrean minggu ini: (\d+)\/5\)\.$/,function(m){return"Design sent to "+m[1]+" for review (queue this week: "+m[2]+"/5).";}],
[/^(.+) memeriksa desain: dapat dibuat, makna motif sesuai\. Level dikonfirmasi: (Sederhana|Menengah|Kompleks) \((\d+) poin\)\.$/,function(m){return m[1]+" checked the design: it can be made and respects the motif's meaning. Level confirmed: "+LV[m[2]]+" ("+m[3]+" points).";}],
[/^(.+) mengusulkan penyesuaian: (.+) Level tetap (Sederhana|Menengah|Kompleks)\.$/,function(m){return m[1]+" proposed an adjustment: "+note(m[2])+" The level stays "+LV[m[3]]+".";}],
[/^Kain selesai\. Foto kain jadi dikirim ke pembeli( sebelum dijahit)?\.$/,function(m){return"Fabric finished. A photo of the finished fabric is sent to the buyer"+(m[1]?" before sewing":"")+".";}],
[/^Estimasi selesai: (\d+) (\S+) (\d{4})$/,function(m){return"Estimated completion: "+m[1]+" "+(MFULL[m[2]]||m[2])+" "+m[3];}],
[/^(WSK-\d+) · (\d+) (\S+) (\d{4}) · (\d+) poin$/,function(m){return m[1]+" · "+m[2]+" "+(MFULL[m[3]]||m[3])+" "+m[4]+" · "+m[5]+" points";}],
[/^saldo (−?)(Rp[\d.]+)$/,function(m){return"balance "+m[1]+m[2];}],
[/^Terima kasih, (.+)!$/,function(m){return"Thank you, "+m[1]+"!";}],
[/^(\d+) pesanan · tersimpan selama sesi prototipe ini$/,function(m){return m[1]+(m[1]==="1"?" order":" orders")+" · kept for this prototype session";}],
[/^Akun (.+)$/,function(m){return"Account "+m[1];}],
[/^(.+) · (Sederhana|Menengah|Kompleks)$/,function(m){return P(m[1])+" · "+LV[m[2]];}],
[/^(.+) · (Rp[\d.]+)$/,function(m){return P(m[1])+" · "+m[2];}],
[/^(\d+) (Mei|Agu|Agt|Okt|Des), (.+)$/,function(m){return m[1]+" "+MSHORT[m[2]]+", "+m[3];}],
[/^(.+) (#[0-9A-F]{6})$/,function(m){return t(m[1])+" "+m[2];}],

/* Hasil terjemahan dari kamus di dalam index.html yang masih memuat nama produk berbahasa Indonesia */
[/^(.+) · handmade in (.+), Banjarmasin$/,function(m){return P(m[1])===m[1]?null:P(m[1])+" · handmade in "+m[2]+", Banjarmasin";}],
[/^(.+) has been sewn\.$/,function(m){return P(m[1])===m[1]?null:"The "+P(m[1])+" has been sewn.";}],
[/^(.+?) · (Simple|Medium|Complex) · (.+)$/,function(m){return P(m[1])===m[1]?null:P(m[1])+" · "+m[2]+" · "+m[3];}]
];

/* ---------- Fungsi yang dipanggil index.html ---------- */
window.WASKA_EN=function(k){
  if(typeof k!=="string"||!k)return null;
  if(has(k))return D[k];
  for(var i=0;i<RX.length;i++){
    var m=k.match(RX[i][0]);
    if(m){var v=RX[i][1](m);if(v!=null)return v;}
  }
  return null;
};
})();
