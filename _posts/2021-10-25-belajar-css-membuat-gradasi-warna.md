---
layout: post
title: "Belajar CSS : Membuat Gradasi Warna"
date: 2021-10-26 07:00:00 +0700
cover: membuat-gradasi-warna-css.png
thumb: membuat-gradasi-warna-css.png
categories: css
---

[Gradasi Warna]({{ page.url }}) - Gradasi Warna adalah warna yang dihasilkan dari __penggabungan dua warna atau lebih__.

Penggunaan gradasi warna pada kondisi tertentu dapat memberikan tampilan yang lebih menarik dibandingkan warna solid.

Anda dapat membuat gradasi warna dengan CSS, mari kita simak penjelasannya berikut.

## Membuat Gradasi Warna

Untuk membuat gradasi warna anda, gunakan fungsi __linear-gradient__ pada properti `background` atau `background-image`.

Linear Gradient dibuat dengan menuliskan __arah__ dan __warna__ gradasinya.

```css
background: linear-gradient(arah, warna1, warna2)
```

Arah dituliskan dengan kata kunci **to** diikuti arahnya.

Berikut beberapa contohnya.

### Gradasi Kanan Kiri

```css
.kotak {
  width: 400px;
  height: 200px;
  background: linear-gradient(to right, green, blue);
}
```

***

![Linear Gradient]({{ site.baseurl }}/assets/img/css/gradient/linear-gradient.png)

***

### Gradasi Atas Bawah

Arah pada *linear gradient* sifatnya **opsional**, jika kita tidak mengisinya arahnya secara *default* dari atas ke bawah.

```css
.kotak {
  width: 400px;
  height: 200px;
  background: linear-gradient(green, blue);
}
```

***

![Linear Gradient 2]({{ site.baseurl }}/assets/img/css/gradient/linear-gradient-2.png)

***

### Gradasi Diagonal

Untuk membuat gradasi diagonal, anda dapat mengatur arah _linear-gradient_ menjadi ke bawah kanan atau ke bawah kiri.

Contoh.

```css
.kotak {
  width: 400px;
  height: 200px;
  background: linear-gradient(to bottom right, green, blue);
}
```

***

![Diagonal Gradient]({{ site.baseurl }}/assets/img/css/gradient/diagonal-gradient.png)

***

### Gradasi Multi Warna

Gradasi juga dapat dibuat menggunakan lebih dari dua warna.

```css
.kotak {
  width: 400px;
  height: 200px;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
}
```

***

![Multi Gradient]({{ site.baseurl }}/assets/img/css/gradient/multi-gradient.png)

***

## Kesimpulan

Selain __linear gradient__, masih ada jenis gradasi lain, yang akan saya buatkan di postingan selanjutnya.

Anda juga dapat mengunjungi tautan berikut untuk penjelasan lebih lanjut mengenai jenis gradasi lain.

<a href="https://www.w3schools.com/css/css3_gradients.asp" target="_blank">CSS Gradients</a>