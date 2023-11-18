function changeText(n) {
        for (var i = 0; i < n; i++) {
            document.getElementsByClassName('test')[i].name = 'star';
        }
        for (var i = n; i < 5; i++) {
            document.getElementsByClassName('test')[i].name = 'star-outline';
        }
    }