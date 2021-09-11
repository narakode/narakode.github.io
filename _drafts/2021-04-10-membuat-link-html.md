---
layout: post
title: "Cara Membuat Link di HTML"
date: 2021-04-10 13:44:00 +0700
cover: membuat-link-html.png
thumb: membuat-link-html-thumb.png
categories: html
---

Link atau tautan adalah komponen penting yang sering muncul di halaman website.

Tujuanya untuk menghubungkan halaman website tersebut dengan website yang lain atau halaman lain.

## Membuat Link

Untuk membuat link kita dapat menggunakan tag `a`. Tag ini agar dapat digunakan dengan baik perlu ditambahkan atribut `href` dengan isi alamat tujuan dari link tersebut.

Contoh

```html
<a href="https://google.com">Pergi Ke Google</a>
```

Hasilnya

***

![Membuat link]({{ site.base_url }}/assets/img/tag-a.png)

***

Ketika teks "Pergi Ke Google" diatas diklik, maka halaman akan beralih menuju ke alamat yang terdapat di atribut `href`, yaitu *https://google.com*.

## Absolut URL dan Relatif URL

Terdapat dua jenis url pada link, yaitu __absolut__ dan __relatif__.

### Absolut URL

Absolut merupakan url yang mengarahkan ke website lain diluar website tersebut, contohnya ke google, facebook, dll.

Penulisanya adalah dengan mencantumkan alamat lengkap dari url tersebut.

```html
<a href="https://github.com">Absolut Url Ke Github</a>
```

### Relatif URL

Relative merupakan url yang mengarahkan ke website itu sendiri. Contoh ketika kita ingin mengalihkan halaman ke file `about.html` yang terdapat pada folder yang sama dengan halaman tersebut.

Penulisanya adalah dengan hanya menuliskan nama file tersebut, jika didalam folder maka cantumkan juga foldernya.

```html
<a href="about.html">Relatif Url</a>
<a href="/pages/about.html">Relatif Url Didalam Folder</a>
```

## Atribut Target

Tag `a` memiliki atribut yang tak kalah penting lainya untuk menunjang kenyaman pengguna, yaitu `target`.

Atribut ini berfungsi untuk menentukan dimana link tersebut akan dibuka, apakah di tab yang sama, di tab yang baru, dll.

Terdapat empat jenis target pada atribut `target`, yaitu.

* `_self`, Membuka link di jendela/tab yang sama
* `_blank`, Membuka link di jendela/tab baru
* `_parent`, Membuka link di frame yang satu tingkat diatas frame tersebut.
* `_top`, Membuka link di frame paling atas.

Contoh

```html
<a href="https://github.com" target="_blank">Buka Github di tab baru</a>
```