let a = 10;
{
  let b = 20;
  {
    let c = 30;

    //які тут будуть значення змінних a=10, b=20, c=30, d-нема

    b++;
    a *= 10;
  }
  {
    let c = 50;
    //які тут будуть значення змінних a=100, b=21, c=50, d-нема
    b += 500;
  }
  {
    const a = 100500;
    const d = "value";
    //які тут будуть значення змінних a=100500, b=521, c-нема, d="value"
    {
      let a = -50;
      b = 1000;
      //які тут будуть значення змінних a=-50, b=1000, c-нема, d="value"
    }
    //які тут будуть значення змінних a=100500, b=1000, c-нема, d="value"
  }
  //які тут будуть значення змінних a=100, b=1000, c-нема, d-нема
}
