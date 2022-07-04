const app = new Vue (
    {

        el: "#app",

        data: {
            message: "",
            colorClass: "",
            imgSrc: "",
            newImg: "",
        },
        
        methods: {
            changeImg: function() {
                this.newImg = this.imgSrc;
            },

            applyEnphasis: function() {

                if (this.message.endsWith("!")) {
                    this.colorClass = "text-red";
                } else {
                    this.colorClass = "text-blue";
                };
                return this.colorClass;
            },
        }
    }
)