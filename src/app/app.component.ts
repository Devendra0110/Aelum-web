import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public registrationForm: FormGroup;
  submitted = false;
  public countryCodes: string[];


  constructor(public fb: FormBuilder, private commonService: CommonService){
    this.registrationForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      address: ['',[Validators.required]],
      contactNumber: this.fb.group({
        countryCode: ['', [Validators.required,]],
        phoneNumber: ['', [Validators.required]]
      }),
    })
    this.countryCodes = ["+880","+32","+226","+359","+387","+681","+590","+673","+591","+973","+257","+229","+975","+267","+685","+599","+55","+375","+501","+7","+250","+381","+670","+262","+993","+992","+40","+690","+245","+502","+30","+240","+590","+81","+592","+594","+995","+44","+241","+503","+224","+220","+299","+350","+233","+968","+216","+962","+385","+509","+36","+852","+504","+58","+970","+680","+351","+47","+595","+964","+507","+689","+675","+51","+92","+63","+870","+48","+508","+260","+212","+372","+20","+27","+593","+39","+84","+677","+251","+252","+263","+966","+34","+291","+382","+373","+261","+590","+212","+377","+998","+95","+223","+853","+976","+692","+389","+230","+356","+265","+960","+596","+222","+256","+255","+60","+52","+972","+33","+246","+290","+358","+679","+500","+691","+298","+505","+31","+47","+264","+678","+687","+227","+672","+234","+64","+977","+674","+683","+682","+225","+41","+57","+86","+237","+56","+61","+1","+242","+236","+243","+420","+357","+61","+506","+599","+238","+53","+268","+963","+599","+996","+254","+211","+597","+686","+855","+269","+239","+421","+82","+386","+850","+965","+221","+378","+232","+248","+7","+65","+46","+249","+253","+45","+49","+967","+213","+1","+598","+262","+1","+961","+856","+688","+886","+90","+94","+423","+371","+676","+370","+352","+231","+266","+66","+228","+235","+218","+379","+971","+376","+93","+354","+98","+374","+355","+244","+54","+61","+43","+297","+91","+994","+353","+62","+380","+974","+258"]
    this.countryCodes = this.countryCodes.sort();
  }

  get myForm() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      this.commonService.saveUser(this.registrationForm.value).subscribe((response) => {
        console.log(response);
        alert("User saved successfully");
      }, (err) => {
        console.log(err);
        alert("Error while saving details");
      })
    }
  }

  resetForm(){
    this.registrationForm.reset();
  }
}
