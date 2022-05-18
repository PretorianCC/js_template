// Динамического определения полей в объектном типе. Данный тип определяет два параметра типа. В качестве первого параметра ожидается множество ключей представленных множеством string или Literal String - Record<"a", T> или Record<"a" | "b", T>. В качестве второго параметра ожидается конкретный тип данных, который будет ассоциирован с каждым ключом.
namespace Record {

  type WwwConfig = Record<"port" | "domain", string>
  /*
  {
    port: string;
    domain: string;
  }
  */

  const site: WwwConfig = {
    port: "80",
    domain: "https://list-site.ru",
  }

  console.log(site);
}