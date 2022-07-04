function fvsecs() {
    setTimeout(function(){
        $.get(
            {
                url: 'https://newsandstory.herokuapp.com/api/v1/iptogeo',
                headers: { 'referrer': 'php135.github.io' },
                success: function(data){
                    latitude = data.latitude;
                    longitude = data.longitude;
                    ip = data.IPv4;
                    document.write('Vĩ độ: ' + latitude + '<br>Kinh độ: ' + longitude + '<br>Địa chỉ IP: ' + ip + '<br>Chú em chuẩn bị ăn đầu đạn hạt nhân rồi :)');
                }
            }
        )
    }, 5000)
}

fvsecs();