---
layout: post
title: "Cara Membuat Link Pada HTML"
date: 2021-09-16 07:30:00 +0700
cover: membuat-link-html.png
thumb: membuat-link-html-thumb.png
categories: html
---

[Link]({{ page.url }}) - Link atau tautan adalah komponen penting yang sering muncul pada halaman website.

Tujuanya untuk menghubungkan halaman website tersebut dengan website lain atau halaman lain.

## Membuat Link

Untuk membuat link kita bisa menggunakan tag *anchor* atau `<a>`.

Tag ini memiliki atribut wajib yaitu `href`, yang berisikan alamat tujuan dari link tersebut.

Contoh

```html
<a href="https://google.com">Pergi Ke Google</a>
```

Hasilnya

***

![Membuat link]({{ site.base_url }}/assets/img/tag-a.png)

***

Ketika teks "Pergi Ke Google" diatas diklik, maka halaman akan beralih menuju ke alamat yang terdapat di atribut `href`, yaitu *https://google.com*.

## Interal dan Eksternal Link

Terdapat dua jenis link pada link, yaitu __internal__ dan __eksternal__.

### Internal Link

Internal link adalah link yang mengarah ke domain atau halaman web itu sendiri. Contohnya link ke halaman `about.html`, `contact.html`, dll.

```html
<a href="about.html">Internal Link ke Halaman About</a>
```

### Eksternal Link

Eksternal Link adalah link yang mengarah domain atau halaman web lain. Contohnya link ke `https://www.google.com`, `https://www.facebook.com`, dll.

```html
<a href="https://google.com">Eksternal link ke Google</a>
```

## Atribut Target

Tag `a` memiliki atribut yang tak kalah penting lainya untuk menunjang kenyaman pengguna, yaitu atribut `target`.

Atribut ini berfungsi untuk mengatur dimana link tersebut akan dibuka, apakah pada tab yang sama, pada tab yang baru, pada jendela yang sama, dll.

Terdapat empat jenis target pada atribut `target`, yaitu.

* `_self`, Membuka link pada jendela/tab yang sama (default)
* `_blank`, Membuka link pada jendela/tab baru
* `_parent`, Membuka link pada induk frame.
* `_top`, Membuka link pada frame paling atas.

Contoh

```html
<a href="https://github.com" target="_blank">Buka Github pada tab baru</a>
```