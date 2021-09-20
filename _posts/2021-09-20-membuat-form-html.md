---
layout: post
title: "Cara Membuat Form Pada HTML"
date: 2021-09-20 10:20:00 +0700
cover: membuat-form-html.png
thumb: membuat-form-html-thumb.png
categories: html
---

[Form HTML]({{ page.url }}) - Form pada halaman website adalah sebuah tempat yang digunakan untuk menerima input/masukan dari pengguna.

Data dari inputan pengguna tersebut biasanya akan dikirim ke server untuk diproses lebih lanjut.

Contoh form seperti form registrasi, form login, form kontak, dll.

Langsung saja mari kita simak cara membuat form dibawah ini.

## Membuat Form

Untuk membuat form kita dapat menggunakan tag `form`.

Tag ini berfungsi sebagai __wadah__ dari form yang berisi berbagai macam jenis inputan yang dapat diisi pengguna.

```html
<form>
	<!-- Inputan Pengguna -->
</form>
```

### Atribut Action

Atribut ini berfungsi untuk mengatur kemana form tersebut akan dikirim.

```html
<form action="register.php">
	<!-- Inputan Pengguna -->
</form>
```

Jika kita tidak memberikan atribut ini pada form, maka form tersebut akan dikirim ke halaman yang sama.

### Atribut Method

Atribut ini berfungsi untuk mengatur tipe *HTTP method* yang akan digunakan ketika form tersebut dikirim.

Atribut tersebut bisa berisi `get` atau `post`.

```html
<form action="register.php" method="post">
	<!-- Inputan Pengguna -->
</form>
```

Secara default form akan mengirimkan data dengan *HTTP method* tipe `get`.

## Tag Input

Jika kalian menjalankan kode diatas pada *browser* maka tidak akan muncul apa-apa, karena fungsi dari tag `form` hanyalah sebagai wadah.

Nah untuk mengisinya, kita perlu memberikan elemen-elemen inputan user.

Kita dapat memulainya dengan tag `input`.

Tag ini memiliki berbagai jenis tipe yang diatur pada atribut `type`.

Berikut jenis-jenis input berdasarkan atribut `type`.

* `<input type="text">`, input jenis ini menerima inputan berupa teks, contohnya inputan nama, username, dll.
* `<input type="number">`, input jenis ini menerima inputan berupa angka, contohnya inputan nomor telepon.
* `<input type="password">`, input jenis ini digunakan untuk membuat input password, teks yang diinputkan tidak akan terlihat.
* `<input type="radio">`, input jenis ini digunakan untuk membuat input berupa pilihan, dimana user hanya dapat memilih satu, contohnya seperti input jenis kelamin.
* `<input type="checkbox">`, input jenis ini digunakan untuk membuat input berupa pilihan, dimana user dapat memilih lebih dari satu dengan cara mencentangnya, contohnya seperti inputan hobi.
* `<input type="date">`, input jenis ini digunakan untuk membuat input tanggal.
* `<input type="file">`, input jenis ini digunakan untuk membuat input file

Dan masih banyak lagi, silahkan buka [W3 School Tag Input](https://www.w3schools.com/html/html_form_input_types.asp) untuk daftar jenis tag input yang lebih lengkap.

### Atribut Placeholder

Atribut *placeholder* pada tag input berfungsi untuk memberikan teks bantuan pada inputan.

Teks pada atribut ini akan muncul ketika kotak input masih kosong.

```html
<form action="register.php" method="post">
	<input type="text" placeholder="Masukan Nama">
	<input type="password" placeholder="Masukan Password">
</form>
```

***

![Atribut Placholder]({{ site.baseurl }}/assets/img/input-placeholder.png)

***

Atribut ini juga dapat digunakan pada tag `textarea`.

## Tag Textarea

Tag ini memiliki tampilan yang mirip seperti tag `input`, bedanya tag ini lebih panjang karena dapat menerima tulisan multi baris.

Tag ini biasanya digunakan untuk membuat inputan bio, deskripsi, atau alamat.

Untuk mengatur panjang pada textarea, gunakan atribut `rows`. Untuk mengatur lebarnya, gunakan atribut `cols`.

```html
<textarea cols="40" rows="10" placeholder="Deskripsikan diri anda"></textarea>
```

***

![Textarea]({{ site.baseurl }}/assets/img/textarea.png)

***

## Tag Select

Tag ini digunakan untuk menerima pilihan pengguna, dimana pilihanya sudah disediakan.

Untuk membuat pilihanya gunakan tag `option`.

```html
<select>
	<option value="male">Laki Laki</option>
	<option value="female">Perempuan</option>
</select>
```

***

![Select]({{ site.baseurl }}/assets/img/tag-select.png)

***

## Tag Label

Tag ini berfungsi sebagai keterangan pada sebuah inputan.

Tag ini biasanya diletakan sebelum tag `input`.

```html
<form action="register.php" method="post">
	<label for="nama">Nama</label>
	<input type="text" id="nama" placeholder="Masukan Nama">
</form>
```

***

![Tag Label]({{ site.baseurl }}/assets/img/form-label.png)

***

## Tag Button

Tag ini digunakan untuk membuat tombol.

Pada beberapa browser ketika tombol ditekan, maka otomatis mengirimkan form, untuk itu tambahkan atribut `type` untuk mencegah pengiriman form.

```html
<button type="submit">Daftar</button>
<button type="button">Button Biasa</button>
```

***

![Tag Button]({{ site.baseurl }}/assets/img/tag-button.png)

***

## Contoh Form Yang Komplit

Berikut adalah contoh form yang komplit dengan menggunakan tag-tag yang tertera diatas.

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