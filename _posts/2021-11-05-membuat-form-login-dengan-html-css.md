---
layout: post
title: "Cara Membuat Form Login dengan HTML dan CSS"
date: 2021-11-05 10:00:00 +0700
cover: membuat-form-login.png
thumb: membuat-form-login.png
categories: css
---

[Form Login]({{ page.url }}) - Form Login adalah __gerbang masuk__ menuju halaman aplikasi.

Pada halaman form login, pengguna akan mengisikan data akun seperti _username_, _password_, _email_, dsb.

Untuk itu tampilan form login haruslah menarik agar pengguna dapat merasa nyaman.

Langsung saja berikut adalah langkah-langah membuat form login dengan HTML dan CSS.

## Membuat Kerangka Form

Langkah awal buatlah sebuah kerangka form, yang terdiri dari:

* judul
* input (username, password)
* tombol login
* link menuju halaman daftar (opsional)

```html
<form>
  <div class="header">
    <h1 class="judul">Login</h1>
    <p class="subtitle">Masukan data akun</p>
  </div>

  <div class="kotak">
    <div class="kotak-input">
      <label class="label">Username</label>
      <input class="input" type="text" placeholder="Username">
    </div>
    <div class="kotak-input">
      <label class="label">Password</label>
      <input class="input" type="password" placeholder="Password">
    </div>
    <button class="tombol">Login</button>
  </div>

  <a href="daftar.html">Belum punya akun? Daftar Disini</a>
</form>
```

***

![Kerangka Form Login]({{ site.baseurl }}/assets/img/css/login/kerangka.png)

***

Tampilanya masih standar, mari kita tambahkan style css.

## Tambahkan Style CSS

Mari kita tambahkan style css bertahap mulai dari elemen _body_-nya.

### Style Body

Kita atur dulu badan kerangka halaman.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  font-size: 16px;
  background-color: #004A7C;
  color: #132C33;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

***

![Style Body]({{ site.baseurl }}/assets/img/css/login/body.png)

***

### Style Kotak Form

Selanjutnya, kita atur kotak form.

```css
form {
  background-color: #FAFAFA;
  width: 35%;
  padding: 1.5rem 1.5rem 2rem;
  border-radius: 5px;
}
```

***

![Style Kotak Form]({{ site.baseurl }}/assets/img/css/login/form.png)

***

### Style Judul

Beri style css pada judul kotak form.

```css
.header {
  margin-bottom: 1rem;
}
.judul {
  font-size: 2rem;
  color: #004A7C;
}
.subtitle {
  font-size: 1.1rem;
}
```

***

![Style Judul]({{ site.baseurl }}/assets/img/css/login/judul.png)

***

### Style Input dan Button

Beri style css pada input dan button form.

```css
.kotak {
  margin-bottom: 1rem;
}
.kotak-input {
  margin-bottom: .5rem;
}
.label {
  display: block;
  margin-bottom: .5rem;
}
.input {
  width: 100%;
  display: block;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.input:focus {
  outline: none;
  border-color: #004A7C;
}
.tombol {
  background: #005691;
  color: #fafafa;
  border: 0;
  width: 100%;
  padding: 10px 0;
  margin-top: .5rem;
  border-radius: 5px;
  font-family: inherit;
  font-weight: bold;
  font-size: inherit;
  cursor: pointer;
}
.tombol:hover {
  background: #004A7C;
}
```

***

![Style Input dan Button]({{ site.baseurl }}/assets/img/css/login/input.png)

***

### Style Link

Beri style css pada link menuju halaman daftar.

```css
a {
  color: #005691;
  text-decoration: none;
}
a:visited {
  color: #004A7C;
} 
```

***

![Style Link]({{ site.baseurl }}/assets/img/css/login/link.png)

***

### Ganti Font

Untuk sentuhan akhir, kita ganti font halaman.

Tambahkan kode berikut di dalam tag `<head>` file _html_.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700&display=swap" rel="stylesheet"> 
```

Lalu tambahkan font tersebut pada CSS elemen **body**.

```css
body {
  font-family: 'Zen Kaku Gothic New', sans-serif;
  /* Isi Body */
}
```

***

![Ganti Font]({{ site.baseurl }}/assets/img/css/login/hasil.png)

***

## Source Code

Saya sudah menyediakan source code form login diatas beserta halaman register pada tautan dibawah ini.

<a href="https://github.com/narakode/form-login-dan-register" target="_blank">Source Code Form Login dan Register dengan HTML dan CSS</a>