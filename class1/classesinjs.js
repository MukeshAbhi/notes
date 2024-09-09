class railwayForm {
    constructor(name,trainno,bordingPoint,destination){
        this.name = name
        this.trainno = trainno
        this.bordingPoint = bordingPoint 
        this.destination = destination
    }

    preview() {
        console.log(this.name + " : Your form is of train number : " + this.trainno + " and your bording point : " + this.bordingPoint + " for destination : " + this.destination )
    }

    submit() {
        console.log(this.name + " : Your form is submitted for tain number : " + this.trainno)
    }

    cancel() {
        console.log(this.name + " : This form is cancelled for train number : " + this.trainno)
        this.trainno = 0
    }
}

let abhisForm = new railwayForm("Abhi",192837,"BDA","MDA")

console.log(abhisForm.name);
abhisForm.preview();
abhisForm.submit();
abhisForm.cancel();
abhisForm.preview();