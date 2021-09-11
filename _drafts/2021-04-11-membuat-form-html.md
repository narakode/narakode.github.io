---
layout: post
title: "Cara Membuat Form di HTML"
date: 2021-04-11 09:46:00 +0700
cover: membuat-form-html.png
thumb: membuat-form-html-thumb.png
categories: html
---

Form pada halaman website biasanya digunakan untuk mengumpulkan data yang di-*input*-kan pengguna.

Data tersebut biasanya akan dikirim ke server untuk diproses.

Contoh penggunaan form pada website seperti form login, form kontak, form registrasi, dll.

## Membuat Form

Untuk membuat form kita dapat menggunakan tag `form`. Tag ini berfungsi sebagai wadah dari form dari berbagai macam inputan yang akan diisi pengguna.

```html
<form>
	<!-- Inputan Pengguna -->
</form>
```

### Atribut Action

Atribut ini berfungsi untuk menjelaskan atau mengarahkan kemana form tersebut akan dikirim.

```html
<form action="register.php">
	<!-- Inputan Pengguna -->
</form>
```

Jika kita tidak memberikan atribut ini pada form, maka form tersebut akan dikirim ke halaman yang sama.

### Atribut Method

Atribut ini berfungsi untuk menjelaskan tipe *HTTP method* yang akan digunakan ketika form tersebut dikirim.

Atribut tersebut bisa berisi `get` atau `post`.

```html
<form action="register.php" method="post">
	<!-- Inputan Pengguna -->
</form>
```

Secara default form akan mengirimkan data dengan *HTTP method* tipe `get`.

## Tag Input

Jika kalian menjalankan kode diatas maka tidak akan muncul apa-apa, karena fungsi dari form hanyalah sebagai wadah.

Nah untuk mengisinya, kita perlu memberikan elemen-elemen inputan user.

Untuk membuatnya kita dapat memulainya dengan tag `input`.

Tag ini memiliki berbagai type yang terdapat pada atribut `type`.

Berikut jenis-jenis input berdasargan atribut `type`.

* `<input type="text">`, input jenis ini menerima inputan berupa teks, contohnya inputan nama, username, dll.
* `<input type="number">`, input jenis ini menerima inputan berupa angka, contohnya inputan nomor telepon.
* `<input type="password">`, input jenis ini digunakan untuk membuat input password, teks yang ininputkan akan tidak terlihat.
* `<input type="radio">`, input jenis ini digunakan untuk membuat input berupa pilihan, dimana user hanya dapat memilih satu, contohnya seperti input jenis kelamin.
* `<input type="checkbox">`, input jenis ini digunakan untuk membuat input berupa pilihan, dimana user hanya dapat memilih lebih satu dengan mencentangnya, contohnya seperti inputan hobi.
* `<input type="date">`, input jenis ini digunakan untuk membuat input tanggal.
* `<input type="file">`, input jenis ini digunakan untuk membuat input file

Masih banyak sebenarnya, silahkan buka [W3 School](https://www.w3schools.com/html/html_form_input_types.asp) untuk pembahasan tag input yang lebih lengkap.

### Atribut Placeholder

Kita juga dapat menambahkan atribut placeholder pada tag input, atribut ini berfungsi untuk memberikan teks bantuan pada inputan.

```html
<form action="register.php" method="post">
	<input type="text" placeholder="Masukan Nama">
	<input type="password" placeholder="Masukan Password">
</form>
```

***

![Atribut Placholder]({{ site.baseurl }}/assets/img/input-placeholder.png)

***

Atribut ini juga dapat digunakan di tag textarea.

## Tag Textarea

Tag ini memiliki tampilan yang hampir sama seperti tag input, bedanya tag ini lebih panjang karena dapat menerima tulisan multi basris.

Tag ini biasanya digunakan untuk membuat inputan bio, deskripsi, atau alamat.

Untuk mengatur panjang textarea gunakan atribut `rows` dan untuk mengatur lebarnya gunakan atribut `cols`.

```html
<textarea cols="40" rows="10" placeholder="Deskripsikan tentang anda"></textarea>
```

***

![Textarea]({{ site.baseurl }}/assets/img/textarea.png)

***

## Tag Select

Tag ini digunakan untuk menerima pilihan pengguna, dimana pilihanya sudah disediakan.

Untuk membuat pilihanya menggunakan tag `option`.

```html
<select>
	<option value="">Laki Laki</option>
	<option value="">Perempuan</option>
</select>
```

***

![Select]({{ site.baseurl }}/assets/img/tag-select.png)

***

## Tag Label

Tag ini digunakan sebgai keterangan atau pelengkan sebuah inputan.

Tag ini memiliki sebuah atribut `for` yang diisi dengan `id` dari input yang ditujukan.

Atribut for berguna untuk beberapa tag, seperti tag checkbox karena ketika label tersebut diklik maka secara otomatis mencentang input tersebut.

```html
<form action="register.php" method="post">
	<label for="nama">Nama</label>
	<input type="text" id="nama" placeholder="Masukan Nama">
</form>
```

## Tag Button

Tag ini digunakan untuk membuat sebuah tombol.

Pada beberapa browser ketika button diklik, akan otomatis mengirimkan form, untuk itu tambahkan atribut `type` untuk mencegah pengiriman form.

```html
<button type="submit">Daftar</button>
<button type="button">Button Biasa</button>
```

## Contoh Form Yang Komplit

Berikut adalah contoh form yang komplit dengan menggunakan tag-tag yang saya sebutkan diatas.

```html
<form action="register.php" method="post">
	<label>Nama : </label>
	<input type="text" placeholder="Masukan Nama"> <br>
	<label>Password : </label>
	<input type="password" placeholder="Masukan Password"> <br>
	Jenis Kelamin : 
	<input type="radio" name="jenis_kelamin" id="laki-laki">
	<label for="laki-laki">Laki-Laki</label>
	<input type="radio" name="jenis_kelamin" id="perempuan">
	<label for="perempuan">Perempuan</label> <br>
	Skill : 
	<input type="checkbox" name="skill" id="html">
	<label for="html">HTML</label>
	<input type="checkbox" name="skill" id="css">
	<label for="css">CSS</label>
	<input type="checkbox" name="skill" id="javascript">
	<label for="javascript">Javascript</label> <br>
	Negara : 
	<select>
		<option>Indonesia</option>
		<option>Malaysia</option>
		<option>Singapura</option>
		<option>Filipina</option>
	</select> <br>
	<label>Bio</label>
	<textarea cols="30" rows="4" placeholder="Bio"></textarea> <br>
	<button type="submit">Daftar</button>
</form>
```

Hasilnya

***

![Contoh Form Yang Komlpit]({{ site.baseurl }}/assets/img/form-komplit.png)

***