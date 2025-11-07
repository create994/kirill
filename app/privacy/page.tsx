"use client"
import { useLanguage } from "@/hooks/useLanguage"

export default function PrivacyPage() {
  const { language, isLoaded } = useLanguage()

  // Show loading state until language is loaded
  if (!isLoaded) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-calm py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {language === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
          </h1>
          <p className="text-blue-200 text-lg">
            {language === "ru"
              ? "Узнайте, как мы собираем, используем и защищаем вашу личную информацию"
              : "Learn how we collect, use, and protect your personal information"}
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-blue-lg p-6 sm:p-8 mb-8">
          <div className="prose prose-gray max-w-none">
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>
                {language === "ru" ? "Дата вступления в силу: " : "Effective Date: "}
                18.07.2025
              </strong>
            </p>

            {/* Introduction */}
            <p className="mb-6">
              {language === "ru" ? (
                <>
                  Добро пожаловать на www.shoshinkirill.com («мы», «нас» или «наш»). Мы привержены защите и уважению
                  вашей конфиденциальности.
                </>
              ) : (
                <>
                  Welcome to www.shoshinkirill.com ("we," "us," or "our"). We are committed to protecting and respecting
                  your privacy.
                </>
              )}
            </p>

            <p className="mb-8">
              {language === "ru" ? (
                <>
                  Данная Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу
                  личную информацию при использовании нашего веб-сайта, включая случаи, когда вы бронируете онлайн-уроки
                  шахмат через платформу Cal.com. Используя наш Сервис, вы соглашаетесь на сбор и использование данных в
                  соответствии с данной политикой.
                </>
              ) : (
                <>
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information
                  when you use our website, including when you book online chess lessons with us through the Cal.com
                  platform. By using our Service, you agree to the collection and use of data in accordance with this
                  policy.
                </>
              )}
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "1. Информация, которую мы собираем" : "1. Information We Collect"}
            </h2>

            <p className="mb-4">
              {language === "ru" ? (
                <>
                  Когда вы регистрируетесь на видеоуроки или записываетесь на встречу с нами, мы собираем следующие
                  персональные данные:
                </>
              ) : (
                <>
                  When you register for video lessons or book an appointment with us, we collect the following personal
                  data:
                </>
              )}
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>{language === "ru" ? "Имя и фамилия" : "Name and Surname"}</li>
              <li>{language === "ru" ? "Адрес электронной почты" : "Email address"}</li>
              <li>{language === "ru" ? "Никнейм в Telegram" : "Telegram nickname"}</li>
              <li>{language === "ru" ? "Текущий уровень игры в шахматы" : "Current chess level"}</li>
              <li>
                {language === "ru"
                  ? "Местоположение (используется исключительно для определения часового пояса в целях планирования)"
                  : "Location (used solely to determine time zone for scheduling purposes)"}
              </li>
            </ul>

            <p className="mb-6">
              {language === "ru" ? (
                <>
                  Эта информация собирается непосредственно от вас через форму бронирования, интегрированную с Cal.com.
                </>
              ) : (
                <>This information is collected directly from you via the booking form integrated with Cal.com.</>
              )}
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "2. Использование ваших данных" : "2. Use of Your Data"}
            </h2>

            <p className="mb-4">
              {language === "ru" ? (
                <>Мы используем вашу личную информацию исключительно для целей, связанных с:</>
              ) : (
                <>We use your personal information exclusively for purposes related to:</>
              )}
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                {language === "ru"
                  ? "Планированием и управлением вашими онлайн-уроками шахмат"
                  : "Scheduling and managing your online chess lessons"}
              </li>
              <li>
                {language === "ru"
                  ? "Общением с вами по поводу ваших бронирований, обновлений уроков или переносов"
                  : "Communicating with you about your bookings, lesson updates, or rescheduling"}
              </li>
              <li>
                {language === "ru"
                  ? "Персонализацией вашего опыта путем учета вашего часового пояса на основе вашего местоположения"
                  : "Personalizing your experience by considering your time zone based on your location"}
              </li>
              <li>
                {language === "ru"
                  ? "Улучшением наших услуг и обеспечением бесперебойной работы бронирования уроков"
                  : "Improving our services and ensuring smooth operation of lesson bookings"}
              </li>
            </ul>

            <p className="mb-6">
              {language === "ru" ? (
                <>Мы не используем ваши данные для маркетинговых или рекламных целей без вашего явного согласия.</>
              ) : (
                <>We do not use your data for marketing or promotional activities unless you explicitly consent.</>
              )}
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "3. Хранение и контроль данных" : "3. Data Storage and Control"}
            </h2>

            <p className="mb-4">
              {language === "ru" ? (
                <>
                  Ваши данные надежно хранятся в инфраструктуре Cal.com. Cal.com выступает в качестве поставщика услуг
                  (обработчика данных) и обрабатывает ваши персональные данные от нашего имени, под нашим руководством и
                  контролем. Мы не передаем и не делимся вашей личной информацией с третьими лицами без вашего согласия,
                  за исключением случаев, требуемых законом.
                </>
              ) : (
                <>
                  Your data is securely stored on Cal.com's infrastructure. Cal.com acts as a service provider (data
                  processor) and processes your personal data on our behalf, under our direction and control. We do not
                  transfer or share your personal information with third parties without your consent, except as
                  required by law.
                </>
              )}
            </p>

            <p className="mb-4">
              {language === "ru" ? (
                <>
                  Практики конфиденциальности Cal.com, включая информацию о хранении данных, безопасности и передачах,
                  подробно описаны в их{" "}
                  <a
                    href="https://cal.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Политике конфиденциальности
                  </a>
                  . Обратите внимание, что Cal.com может хранить и обрабатывать данные за пределами вашей страны
                  проживания, включая Соединенные Штаты. Бронируя через Cal.com, вы соглашаетесь на эту передачу данных.
                </>
              ) : (
                <>
                  Cal.com's privacy practices, including information about data retention, security, and transfers, are
                  detailed in their{" "}
                  <a
                    href="https://cal.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Privacy Policy
                  </a>
                  . Please be aware that Cal.com may store and process data outside your country of residence, including
                  the United States. By booking through Cal.com, you consent to this data transfer.
                </>
              )}
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "4. Файлы cookie и отслеживание" : "4. Cookies and Tracking"}
            </h2>

            <p className="mb-6">
              {language === "ru" ? (
                <>
                  Наш веб-сайт и Cal.com используют файлы cookie для улучшения вашего опыта, включая оптимизацию сеансов
                  и безопасность. Вы можете контролировать или отключить файлы cookie через настройки вашего браузера;
                  однако отключение файлов cookie может повлиять на функциональность службы бронирования.
                </>
              ) : (
                <>
                  Our website and Cal.com use cookies to enhance your experience, including session optimization and
                  security. You may control or disable cookies through your browser settings; however, disabling cookies
                  may affect the functionality of the booking service.
                </>
              )}
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "5. Хранение данных" : "5. Data Retention"}
            </h2>

            <p className="mb-6">
              {language === "ru" ? (
                <>
                  Мы храним ваши персональные данные только столько времени, сколько необходимо для предоставления вам
                  наших услуг и соблюдения правовых обязательств. Если вы хотите запросить удаление ваших данных,
                  пожалуйста, свяжитесь с нами (см. Раздел 8).
                </>
              ) : (
                <>
                  We retain your personal data only as long as necessary to provide you with our services and to comply
                  with legal obligations. If you wish to request deletion of your data, please contact us (see Section
                  8).
                </>
              )}
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "6. Ваши права" : "6. Your Rights"}
            </h2>

            <p className="mb-4">
              {language === "ru" ? (
                <>
                  В зависимости от вашего местоположения, у вас есть определенные права в отношении ваших персональных
                  данных, включая:
                </>
              ) : (
                <>Depending on your location, you have certain rights regarding your personal data, including:</>
              )}
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                {language === "ru"
                  ? "Право на доступ к персональным данным, которые мы храним о вас"
                  : "The right to access the personal data we hold about you"}
              </li>
              <li>
                {language === "ru"
                  ? "Право на исправление или обновление неточных или неполных данных"
                  : "The right to correct or update inaccurate or incomplete data"}
              </li>
              <li>
                {language === "ru"
                  ? "Право запросить удаление ваших персональных данных"
                  : "The right to request deletion of your personal data"}
              </li>
              <li>
                {language === "ru"
                  ? "Право ограничить или возразить против определенных типов обработки данных"
                  : "The right to restrict or object to certain types of data processing"}
              </li>
              <li>
                {language === "ru"
                  ? "Право отозвать согласие, если обработка основана на согласии"
                  : "The right to withdraw your consent where processing is based on consent"}
              </li>
              <li>
                {language === "ru"
                  ? "Право на переносимость данных, получение ваших данных в общепринятом формате"
                  : "The right to data portability, receiving your data in a commonly used format"}
              </li>
            </ul>

            <p className="mb-6">
              {language === "ru" ? (
                <>
                  Для осуществления этих прав или по любым вопросам о ваших персональных данных, пожалуйста, свяжитесь с
                  нами напрямую.
                </>
              ) : (
                <>To exercise these rights or for any questions about your personal data, please contact us directly.</>
              )}
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "7. Безопасность" : "7. Security"}
            </h2>

            <p className="mb-6">
              {language === "ru" ? (
                <>
                  Мы применяем разумные технические и организационные меры для защиты ваших данных от
                  несанкционированного доступа, раскрытия, изменения или уничтожения. Однако никакая онлайн-передача
                  данных не может быть гарантирована как 100% безопасная.
                </>
              ) : (
                <>
                  We implement reasonable technical and organizational measures to protect your data against
                  unauthorized access, disclosure, alteration, or destruction. However, no online data transmission can
                  be guaranteed as 100% secure.
                </>
              )}
            </p>

            {/* Section 8 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "8. Контактная информация" : "8. Contact Information"}
            </h2>

            <p className="mb-4">
              {language === "ru" ? (
                <>
                  Если у вас есть вопросы об этой Политике конфиденциальности или вы хотите сделать запрос относительно
                  ваших персональных данных, пожалуйста, свяжитесь с нами:
                </>
              ) : (
                <>
                  If you have any questions about this Privacy Policy or wish to make a request regarding your personal
                  data, please contact:
                </>
              )}
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:conciliateur@mail.ru" className="text-blue-600 hover:text-blue-800">
                  conciliateur@mail.ru
                </a>
              </p>
              <p>
                <strong>Telegram:</strong>{" "}
                <a
                  href="https://t.me/SHOSHIN_KIRILL"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @SHOSHIN_KIRILL
                </a>
              </p>
            </div>

            <p className="mb-6">
              {language === "ru" ? (
                <>Мы ответим на ваши запросы в соответствии с применимыми законами о защите данных.</>
              ) : (
                <>We will respond to your requests in accordance with applicable data protection laws.</>
              )}
            </p>

            {/* Section 9 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru"
                ? "9. Изменения в данной Политике конфиденциальности"
                : "9. Changes to This Privacy Policy"}
            </h2>

            <p className="mb-6">
              {language === "ru" ? (
                <>
                  Мы можем время от времени обновлять данную Политику конфиденциальности. Мы уведомим вас о любых
                  существенных изменениях, разместив обновленную политику на нашем веб-сайте с новой датой вступления в
                  силу.
                </>
              ) : (
                <>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the updated policy on our website with a new effective date.
                </>
              )}
            </p>

            {/* Additional Notes */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {language === "ru" ? "Дополнительные примечания" : "Additional Notes"}
            </h2>

            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                {language === "ru" ? (
                  <>
                    Cal.com может отправлять вам электронные письма или SMS-сообщения с подтверждением бронирования и
                    напоминаниями от нашего имени.
                  </>
                ) : (
                  <>Cal.com may send you booking confirmation and reminder emails or SMS messages on our behalf.</>
                )}
              </li>
              <li className="mb-2">
                {language === "ru" ? (
                  <>
                    Cal.com может использовать сторонние сервисы (например, провайдера видеоконференций Daily.co) для
                    проведения уроков; пожалуйста, обратитесь к их соответствующим уведомлениям о конфиденциальности.
                  </>
                ) : (
                  <>
                    Cal.com may use third-party services (e.g., video conferencing provider Daily.co) to facilitate
                    lessons; please refer to their respective privacy notices.
                  </>
                )}
              </li>
              <li className="mb-2">
                {language === "ru" ? (
                  <>Мы не продаем и не сдаем в аренду вашу личную информацию.</>
                ) : (
                  <>We do not sell or rent your personal information.</>
                )}
              </li>
            </ul>

            {/* Cal.com Privacy Policy Link */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                {language === "ru" ? (
                  <>
                    <strong>Важно:</strong> Данная Политика дополняет и не заменяет Политику конфиденциальности Cal.com.
                    Для получения подробной информации о том, как Cal.com обрабатывает данные, посетите{" "}
                    <a
                      href="https://cal.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      https://cal.com/privacy
                    </a>
                  </>
                ) : (
                  <>
                    <strong>Important:</strong> This Policy complements and does not replace Cal.com's Privacy Policy.
                    For comprehensive details on how Cal.com handles data, visit{" "}
                    <a
                      href="https://cal.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      https://cal.com/privacy
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
