import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { textStyle } from '../Variables';

class PrivatePolicy extends Component{
  render(){
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.forewords}>Данное приложение обслуживается и предоставляется командой Enactus KSTU. Если вы установите и будете использовать данное приложение, мы будем собирать данные о вас согласно “законодательству о персональных данных”. В настоящей Политике конфиденциальности приводятся сведения о том, как именно используются данные, собранные нашими приложениями и сайтами, а также о том, куда вы можете обратиться в случае каких-либо вопросов или сомнений.</Text>
        <View style={styles.section}>
          <Text style={styles.headerText}>1. ОСНОВНЫЕ ПОНЯТИЯ</Text>
          <Text style={styles.text}><Text style={styles.bold}>Мобильное приложение</Text> – приложение Donor.kg. </Text>
          <Text style={styles.text}><Text style={styles.bold}>Администрация</Text> –администраторы приложения Donor.kg.</Text>
          <Text style={styles.text}><Text style={styles.bold}>Пользователь</Text> – физическое или юридическое лицо, разместившее свою персональную информацию посредством Формы обратной связи на сайте с последующей целью передачи данных  Администрации Сайта.</Text>
          <Text style={styles.text}><Text style={styles.bold}>Форма обратной связи</Text> – специальная форма, где Пользователь размещает свою персональную информацию с целью передачи данных  Администрации Сайта.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.headerText}>2. ОБЩИЕ ПОЛОЖЕНИЯ</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.1</Text> Настоящая Политика конфиденциальности является официальным типовым документом Администрации и определяет порядок обработки и защиты информации о физических и юридических лицах, использующих Форму обратной связи на Сайте.</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.2</Text> Целью настоящей Политики конфиденциальности является обеспечение надлежащей защиты информации о Пользователе, в т.ч. его персональных данных от несанкционированного доступа и разглашения.</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.3</Text> Отношения, связанные со сбором, хранением, распространением и защитой информации о пользователях регулируются настоящей Политикой конфиденциальности и действующим законодательством Кыргызской Республики.</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.4</Text> Действующая редакция Политики конфиденциальности, является публичным документом, разработана Администрацией и доступна любому Пользователю сети Интернет при скачивании с Google Play Market.</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.5</Text> Администрация вправе вносить изменения в настоящую Политику конфиденциальности.</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.6</Text> При внесении изменений в Политику конфиденциальности, Администрация уведомляет об этом Пользователя путём размещения новой редакции Политики конфиденциальности в приложении.</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.7</Text> При размещении новой редакции Политики конфиденциальности, предыдущая редакция хранятся в архиве документации Администрации.</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.8</Text> Используя Форму обратной связи, Пользователь выражает свое согласие с условиями настоящей Политики конфиденциальности.</Text>
          <Text style={styles.text}><Text style={styles.bold}>2.9</Text> Администрация  не проверяет достоверность получаемой (собираемой) информации о Пользователе.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.headerText}>3. УСЛОВИЯ И ЦЕЛИ СБОРА И ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ</Text>
          <Text style={styles.text}><Text style={styles.bold}>3.1</Text> Персональные данные Пользователя такие как: имя, фамилия, отчество, e-mail, телефон  и др., передаются Пользователем  Администрации с согласия Пользователя.</Text>
          <Text style={styles.text}><Text style={styles.bold}>3.2</Text> Передача персональных данных Пользователем Администрации, через Форму обратной связи  означает согласие Пользователя на передачу его персональных данных.</Text>
          <Text style={styles.text}><Text style={styles.bold}>3.3</Text> Администрация осуществляет обработку информации о Пользователе, в т.ч. его персональных данных, таких как: имя, фамилия, отчество, e-mail, телефон  и др., а также дополнительной информации о Пользователе, предоставляемой им по своему желанию: организация, город, должность и др. в целях выполнения обязательств перед Пользователем.</Text>
          <Text style={styles.text}><Text style={styles.bold}>3.4</Text> Обработка персональных данных осуществляется на основе принципов:</Text>
          <View style={styles.indent}>
            <Text style={styles.text}><Text style={styles.bold}>a)</Text> законности целей и способов обработки персональных данных и добросовестности;</Text>
            <Text style={styles.text}><Text style={styles.bold}>б)</Text> соответствия целей обработки персональных данных целям, заранее определенным и заявленным при сборе персональных данных;</Text>
            <Text style={styles.text}><Text style={styles.bold}>в)</Text> соответствия объёма и характера обрабатываемых персональных данных способам обработки персональных данных и целям обработки персональных данных;</Text>
            <Text style={styles.text}><Text style={styles.bold}>г)</Text> недопустимости объединения созданных для несовместимых между собой целей баз данных, содержащих персональные данные.</Text>
          </View>
          <Text style={styles.text}><Text style={styles.bold}>3.5</Text> Администрация осуществляет обработку персональных данных Пользователя с его согласия в целях оказания донорства, с помощью приложения Donor.kg.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.headerText}>4. ХРАНЕНИЕ И ИСПОЛЬЗОВАНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ</Text>
          <Text style={styles.text}>Персональные данные Пользователя хранятся исключительно на электронных носителях и используются строго по назначению, оговоренному в п.3 настоящей Политики конфиденциальности.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.headerText}>5. ПЕРЕДАЧА ПЕРСОНАЛЬНЫХ ДАННЫХ</Text>
          <Text style={styles.text}><Text style={styles.bold}>5.1</Text> Персональные данные Пользователя не передаются каким-либо третьим лицам, за исключением случаев, прямо предусмотренных настоящей Политикой конфиденциальности, указанных в Согласии с рассылкой.</Text>
          <Text style={styles.text}><Text style={styles.bold}>5.2</Text> Предоставление персональных данных Пользователя по запросу государственных органов, органов местного самоуправления осуществляется в порядке, предусмотренном законодательством Кыргызской Республики.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.headerText}>6. СРОКИ ХРАНЕНИЯ И УНИЧТОЖЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ</Text>
          <Text style={styles.text}><Text style={styles.bold}>6.1</Text> Персональные данные Пользователя хранятся на электронном носителе сайта бессрочно.</Text>
          <Text style={styles.text}><Text style={styles.bold}>6.2</Text> Персональные данные Пользователя уничтожаются при желании самого пользователя на основании его обращения, либо по инициативе Администратора без объяснения причин путём удаления Администрацией информации, размещённой Пользователем.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.headerText}>7. ПРАВА И ОБЯЗАННОСТИ ПОЛЬЗОВАТЕЛЕЙ</Text>
          <Text style={styles.text}>Пользователи вправе на основании запроса получать от Администрации информацию, касающуюся обработки его персональных данных.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.headerText}>8. МЕРЫ ПО ЗАЩИТЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЯХ</Text>
          <Text style={styles.text}>Администратор  принимает технические и организационно-правовые меры в целях обеспечения защиты персональных данных Пользователя от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.headerText}>9. ОБРАЩЕНИЯ ПОЛЬЗОВАТЕЛЕЙ</Text>
          <Text style={styles.text}><Text style={styles.bold}>9.1</Text>Пользователь вправе направлять Администрации  свои запросы, в т.ч. относительно использования/удаления его персональных данных, предусмотренные п.3 настоящей Политики конфиденциальности в письменной форме по адресу, указанному в п.1.</Text>
          <Text style={styles.text}><Text style={styles.bold}>9.2</Text>Запрос, направляемый Пользователем, должен содержать следующую информацию:</Text>
          <Text style={styles.text}>для физического лица:</Text>
          <View style={styles.indent}>
            <Text style={styles.text}>– номер основного документа, удостоверяющего личность Пользователя или его представителя;</Text>
            <Text style={styles.text}>– сведения о дате выдачи указанного документа и выдавшем его органе;</Text>
            <Text style={styles.text}>– дату регистрации через Форму обратной связи;</Text>
            <Text style={styles.text}>– текст запроса в свободной форме;</Text>
            <Text style={styles.text}>– подпись Пользователя или его представителя.</Text>
          </View>
          <Text style={styles.text}>для юридического лица:</Text>
          <View style={styles.indent}>
            <Text style={styles.text}>– запрос в свободной форме на фирменном бланке;</Text>
            <Text style={styles.text}>– дата регистрации через Форму обратной связи;</Text>
            <Text style={styles.text}>– запрос должен быть подписан уполномоченным лицом с приложением документов, подтверждающих полномочия лица.</Text>
          </View>
          <Text style={styles.text}><Text style={styles.bold}>9.3</Text>Администрация = обязуется рассмотреть и направить ответ на поступивший запрос Пользователя в течение 30 дней с момента поступления обращения.</Text>
          <Text style={styles.text}><Text style={styles.bold}>9.4</Text> Вся корреспонденция, полученная Администрацией от Пользователя (обращения в письменной/электронной форме) относится к информации ограниченного доступа и без письменного согласия Пользователя разглашению не подлежит. Персональные данные и иная информация о Пользователе, направившем запрос, не могут быть без специального согласия Пользователя использованы иначе, как для ответа по теме полученного запроса или в случаях, прямо предусмотренных законодательством.</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    ...textStyle,
    fontSize: 19,
    fontWeight: '600',
    color: '#2d2d2d',
    alignSelf: 'center',
    marginBottom: 10,
  },
  text: {
    ...textStyle,
    fontSize: 17,
    color: '#2d2d2d',
    lineHeight: 20,
    marginVertical: 5,
  },
  bold: {
    ...textStyle,
    fontSize: 17,
    fontWeight: '500',
    color: '#2d2d2d',
  },
  forewords: {
    ...textStyle,
    fontSize: 16,
    color: '#4d4d4d',
  },
  section: {
    marginVertical: 5,
  },
  indent: {
    marginLeft: 15,
  },
});

export default PrivatePolicy;
