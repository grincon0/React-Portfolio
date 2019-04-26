handleClassesScrollTop = () => {


    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop


    if(this.state.showAbout === false){
        if(400 < scrollTop && scrollTop < 849){
            this.setState({ showAbout: true });
        }

    }else if(this.state.showAbout === true){
        if(850 < scrollTop && scrollTop < 1600){
            this.setState({ showAbout : false});
        }
    }

    if (this.state.showDetail === false){
        if(1500 < scrollTop && scrollTop < 2400){
            this.setState({ showDetail: true });
        }
    }else if(this.state.showDetail === true){
        if(0 < scrollTop && scrollTop < 1499){
            this.setState({ showDetail : false});
        }
    }

      /* 
    if (this.state.showStack === false){

    } */

    if ((this.state.showAbout === false && scrollTop > 400) && (this.state.showAbout === false && scrollTop < 849)) {

        this.setState({ showAbout: true });

    }else if(this.state.showAbout === true && scrollTop > 850 && (this.state.showAbout === true && scrollTop < 1600)){
        this.setState({ showAbout: false });
    }

    if (this.state.showDetail === false && scrollTop > 800) {
        this.setState({ showDetail: true });
    }else if(this.state.showDetail === true && scrollTop > 1600){
        this.setState({ showDetail: false });
    }
    if (this.state.showStack === false && scrollTop > 1100) {

        this.setState({ showStack: true });
    }
}

