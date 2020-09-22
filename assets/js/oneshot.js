function notifH(mesaj) { toastr.error(mesaj); }
function notifS(mesaj) { toastr.success(mesaj); }
function notifI(mesaj) { toastr.info(mesaj); }


var ajis = 0;
function eval_ajax(data) { if (ajis == 0) { ajis = 1; $.ajax({ url: "../../ajax.php", async: true, data: data, type: 'POST', success: function(result){ ajis = 0; eval(result); } }); } else { notifH('Devam eden bir işlem bulunmaktadır. Lüfen devam eden işlemin bitmesini bekleyiniz.'); } }
function html_ajax(data) { if (ajis == 0) { ajis = 1; $.ajax({ url: "../../ajax.php", async: true, data: data, type: 'POST', success: function(result){ ajis = 0; $('#ajax_return').html(result); } }); } else { notifH('Devam eden bir işlem bulunmaktadır. Lüfen devam eden işlemin bitmesini bekleyiniz.'); } }


function giris_yap() {
    var data = {
        islem: 'giris_yap',
        eposta: $('#giris_mail').val(),
        sifre: $('#giris_sifre').val(),
    }
    eval_ajax(data);
}

function kayit_ol() {
    if (!$('#kayit_sozlesme').is(':checked')) { notifH('Kullanıcı sözleşmesini kabul etmeden kayıt olamazsınız.'); return false; }
    var data = {
        islem: 'kayit_ol',
        eposta: $('#kayit_mail').val(),
        isim: $('#kayit_isim').val(),
        soyisim: $('#kayit_soyisim').val(),
        sifre: $('#kayit_sifre').val(),
        sifret: $('#kayit_sifretekrar').val(),
    }
    eval_ajax(data);
}

function sifremi_unuttum() {
    var data = {
        islem: 'sifremi_unuttum',
        eposta: $('#sifre_mail').val(),
    }
    eval_ajax(data);
}

function bilgileri_guncelle() {
    var data = {
        islem: 'bilgileri_guncelle',
        isim: $('#bilgi_isim').val(),
        soyisim: $('#bilgi_soyisim').val(),
        il: $('#il').val(),
        ilce: $('#ilce').val(),
        tel: $('#bilgi_tel').val()
    }
    eval_ajax(data);
}

function sifre_guncelle()
{
    var data = {
        islem: 'sifre_guncelle',
        eski_sifre: $('#eski_sifre').val(),
        yeni_sifre: $('#yeni_sifre').val(),
        yeni_sifre_tkr: $('#yeni_sifre_tkr').val()
    }
    eval_ajax(data);
}

function gizlilik_guncelle()
{
    var data = {
        islem: 'gizlilik_guncelle',
        herkese_acik: $('#herkese_acik').val(),
        uyelik_tarihi: $('#uyelik_tarihi').val(),
        songiris_tarihi: $('#songiris_tarihi').val(),
        oyun_durumu: $('#oyun_durumu').val(),
        son_satinalim: $('#son_satinalim').val(),
        son_odeme: $('#son_odeme').val(),
        sans_kutulari: $('#sans_kutulari').val(),
        aktif_sure: $('#aktif_sure').val(),
        rozetler: $('#rozetler').val(),
        paylasilan_cfgleri: $('#paylasilan_cfgleri').val(),
        blog_yorumlari: $('#blog_yorumlari').val(),
        musteri_yorumu: $('#musteri_yorumu').val(),
        referans_sayi: $('#referans_sayi').val(),
        referans_bonus: $('#referans_bonus').val()
    }
    eval_ajax(data);
}

function satin_al()
{
    var data = {
        islem: 'satin_al',
        paketno: $('#paketno').val()
    }
    eval_ajax(data);
}

function bakiye_yukle()
{
    var data = {
        islem: 'bakiye_yukle',
        miktar: $('#miktar').val(),
        ad: $('#ad').val(),
        soyad: $('#soyad').val(),
        adres: $('#adres').val(),
        tel: $('#tel').val(),
    }
    html_ajax(data);
}

function gumus_ac()
{
    var data = {
        islem: 'gumus_ac'
    }
    $('#ajax_return').empty();
    html_ajax(data);
}

function altin_ac()
{
    var data = {
        islem: 'altin_ac'
    }
    $('#ajax_return').empty();
    html_ajax(data);
}

function elmas_ac()
{
    var data = {
        islem: 'elmas_ac'
    }
    $('#ajax_return').empty();
    html_ajax(data);
}

function rapor_et()
{
    var data = {
        islem: 'rapor_et',
        profil: $('#profil').val(),
        neden: $('#neden').val()
    }
    eval_ajax(data);
}

function ovgu_gonder()
{
    var data = {
        islem: 'ovgu_gonder',
        profil: $('#profil').val(),
        discord: $('#discord').val(),
        adet: $('#adet').val()
    }
    eval_ajax(data);
}

function whitelist_satinal()
{
    var data = {
        islem: 'whitelist_satinal',
        profil: $('#whitelist_profil').val()
    }
    eval_ajax(data);
}

function lobi_gonder()
{
    var data = {
        islem: 'lobi_gonder',
        link: $('#link').val(),
        hile: $('#hile').val(),
        seckin: $('#seckin').val(),
        rutbe: $('#rutbe').val(),
    }
    eval_ajax(data);
}

function cekilise_katil()
{
    var data = {
        islem: 'cekilise_katil',
        facebooklink: $('#facebooklink').val(),
        instagramlink: $('#instagramlink').val(),
        youtubelink: $('#youtubelink').val(),
        paylasimlink: $('#paylasimlink').val(),
    }
    eval_ajax(data);
}

function copy_url() 
{
    var copyText = document.getElementById("copyit");
    copyText.select();
    document.execCommand("Copy");
}

function yorum_yap()
{
    var data = {
        islem: 'yorum_yap',
        yorum: $('#yorum').val()
    }
    eval_ajax(data);
}

function cikis_yap()
{
    var data = {
        islem: 'cikis_yap',
    }
    eval_ajax(data);
}

function destek_olustur()
{
    var data = {
        islem: 'destek_olustur',
        kategori: $('#kategori').val(),
        oncelik: $('#oncelik').val(),
        baslik: $('#baslik').val(),
        mesaj: $('#mesaj').val()
    }
    eval_ajax(data);
}

function destek_cevapla()
{
    var data = {
        islem: 'destek_cevapla',
        yanit: $('#yanit').val(),
        ticket_id: $('#ticket_id').val()
    }
    eval_ajax(data);
}

function destek_kapat()
{
    var data = {
        islem: 'destek_kapat',
        ticket_id: $('#ticket_id').val()
    }
    eval_ajax(data);
}

function blogyorum_yap()
{
    var data = {
        islem: 'blogyorum_yap',
        comment: $('#comment').val(),
        blog_id: $('#blog_id').val()
    }
    eval_ajax(data);
}

//// İL/İLÇE SEÇİMİ ////

$(function(){

$(document.body).on('change', '#il', function(){
    var il_no = $(this).val();
    if (il_no){
        $.post('ajax.html', {'il_no': il_no}, function(response){
            $('#ilce').html(response).removeAttr('disabled');
        });
    } else {
        $('#ilce').html('<option>- İlçe Seçin -</option>').attr('disabled', 'disabled');
    }
});

});

$(document).ready(function (e) {
    $('#imageUploadForm').on('submit',(function(e) {
        e.preventDefault();
        var formData = new FormData(this);

        $.ajax({
            type:'POST',
            url: 'ajax.php',
            data:formData,
            cache:false,
            contentType: false,
            processData: false,
            success:function(data){
                eval(data);
            },
            error: function(data){
                eval(data);
            }
        });
    }));

    $("#ImageBrowse").on("change", function() {
        eval("notifI('Profil fotoğrafınız güncelleniyor...');");
        $("#imageUploadForm").submit();
    });
});

$('#avatar').click(function(){
    $('#ImageBrowse').click();
});

$('#avatari').click(function(){
    $('#ImageBrowse').click();
});


$('#CFGYukleFormGonder').click(function(){
    eval("notifI('Ayar (CFG) dosyası yükleniyor...');");
    $('#CFGYukleForm').submit();
});

$(document).ready(function (e) {
    $('#CFGYukleForm').on('submit',(function(e) {
        e.preventDefault();
        var formData = new FormData(this);

        $.ajax({
            type:'POST',
            url: 'ajax.php',
            data:formData,
            cache:false,
            contentType: false,
            processData: false,
            success:function(data){
                eval(data);
            },
            error: function(data){
                eval(data);
            }
        });
    }));
});

/*
$(document).ready(function() {
$('select[name="odemetipi"]').change(function(){

    if ($(this).val() >= 10){
        $('#odemeForm').attr('action', "odeme_banka.html");
    }
    else {
        $('#odemeForm').attr('action', "odeme.html");
    }

    if($(this).val() == 3){
        notifI("Ininal kart için açılan ödeme sayfasından DİĞER ÖDEME YÖNTEMLERİ butonuna tıklayıp ÖN ÖDEMELİ KARTLAR seçeneğini seçmeniz gerekmektedir.");  
    }

    if($(this).val() == -1){
        notifH("Lütfen ödeme yönteminizi seçiniz.");
        return false;
    } 
});
});
*/

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))

