# Modern Pricing Table Template 💰

```markdown
[🇬🇧 English Version / Czytaj po angielsku](README.md)
```

Prosta, responsywna i nowoczesna tabela cenowa (Pricing Table) stworzona w czystym HTML, CSS i JavaScript. Idealna dla stron typu SaaS, landing page'y i ofert usługowych.

## Funkcje 🚀

* **Responsywność:** Działa idealnie na komputerach (układ poziomy) i telefonach (układ pionowy).
* **Przełącznik Ceny (Toggle):** Pozwala wybierać między płatnością miesięczną a roczną.
* **Logika JS:** Automatycznie przelicza ceny i pokazuje informację o oszczędności przy płatności rocznej.
* **Efekty wizualne:** Nowoczesne cienie, animacje hover i wyróżnienie planu "Najlepszy Wybór".
* **Czysty kod:** Brak zewnętrznych bibliotek (jak Bootstrap czy jQuery) – tylko czysty kod, który łatwo wkleić.

## Demo (Podgląd) 👀

Zobacz jak to wygląda na żywo:
[LINK](https://hsr88.github.io/modern-pricing-table-template/)

## Jak używać? ⚙️

1. Pobierz plik `index.html` z tego repozytorium.
2. Skopiuj sekcję `<style>` do swojego pliku CSS lub nagłówka strony.
3. Skopiuj sekcję `<section class="pricing-section">` w miejsce, gdzie ma się pojawić cennik.
4. Skopiuj skrypt `<script>` i umieść go przed zamknięciem znacznika `</body>`.

### Konfiguracja cen

Ceny edytujesz bezpośrednio w kodzie HTML, używając atrybutów `data`:

```html
<div class="plan-price" 
     data-monthly="49"     data-yearly="39">     49 zł
</div>
```
Licencja 📄

Ten projekt jest udostępniony na licencji MIT - możesz go swobodnie używać w projektach komercyjnych i prywatnych.
