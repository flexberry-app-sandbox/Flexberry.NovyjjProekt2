



CREATE TABLE "Поставщики"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Почта" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Материалы"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Марка" NVARCHAR2(255) NULL,

	"Единицы" NVARCHAR2(2) NULL,

	"Стоимость" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"НомерТелефона" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПереченьТоваров"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Товары" RAW(16) NOT NULL,

	"ПриходДенег" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Финансисты"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"НомерТелефона" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Товары"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Стоимость" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СоставТовара"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Единицы" NVARCHAR2(2) NULL,

	"Материалы" RAW(16) NOT NULL,

	"Товары" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РегистрОборот"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"РасходПриход" NVARCHAR2(6) NULL,

	"Тип" NVARCHAR2(18) NULL,

	"Сумма" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПриходДенег"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"РасходПриход" NVARCHAR2(6) NULL,

	"Тип" NVARCHAR2(18) NULL,

	"Сумма" FLOAT(126) NULL,

	"Финансисты" RAW(16) NOT NULL,

	"Клиенты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПереченьУслуг"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Услуги" RAW(16) NOT NULL,

	"ПриходДенег" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РасходДенег"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Банк" NVARCHAR2(8) NULL,

	"Счет" NUMBER(10) NULL,

	"ИНН" NUMBER(10) NULL,

	"БИК" NUMBER(10) NULL,

	"РасходПриход" NVARCHAR2(6) NULL,

	"Тип" NVARCHAR2(18) NULL,

	"Сумма" FLOAT(126) NULL,

	"Поставщики" RAW(16) NOT NULL,

	"Финансисты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПереченьМат"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Материалы" RAW(16) NOT NULL,

	"РасходДенег" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Услуги"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Стоимость" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ПереченьТоваров"
	ADD CONSTRAINT "ПереченьТова_9184" FOREIGN KEY ("Товары") REFERENCES "Товары" ("primaryKey");

CREATE INDEX "ПереченьТова_6024" on "ПереченьТоваров" ("Товары");

ALTER TABLE "ПереченьТоваров"
	ADD CONSTRAINT "ПереченьТова_4901" FOREIGN KEY ("ПриходДенег") REFERENCES "ПриходДенег" ("primaryKey");

CREATE INDEX "ПереченьТова_3263" on "ПереченьТоваров" ("ПриходДенег");

ALTER TABLE "СоставТовара"
	ADD CONSTRAINT "СоставТовара__8886" FOREIGN KEY ("Материалы") REFERENCES "Материалы" ("primaryKey");

CREATE INDEX "СоставТовара__9804" on "СоставТовара" ("Материалы");

ALTER TABLE "СоставТовара"
	ADD CONSTRAINT "СоставТовара__2401" FOREIGN KEY ("Товары") REFERENCES "Товары" ("primaryKey");

CREATE INDEX "СоставТовара__3065" on "СоставТовара" ("Товары");

ALTER TABLE "ПриходДенег"
	ADD CONSTRAINT "ПриходДенег_F_3166" FOREIGN KEY ("Финансисты") REFERENCES "Финансисты" ("primaryKey");

CREATE INDEX "ПриходДенег_I_9170" on "ПриходДенег" ("Финансисты");

ALTER TABLE "ПриходДенег"
	ADD CONSTRAINT "ПриходДенег_F_5719" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "ПриходДенег_I_8061" on "ПриходДенег" ("Клиенты");

ALTER TABLE "ПереченьУслуг"
	ADD CONSTRAINT "ПереченьУслу_9250" FOREIGN KEY ("Услуги") REFERENCES "Услуги" ("primaryKey");

CREATE INDEX "ПереченьУслу_3561" on "ПереченьУслуг" ("Услуги");

ALTER TABLE "ПереченьУслуг"
	ADD CONSTRAINT "ПереченьУслу_2349" FOREIGN KEY ("ПриходДенег") REFERENCES "ПриходДенег" ("primaryKey");

CREATE INDEX "ПереченьУслу_8436" on "ПереченьУслуг" ("ПриходДенег");

ALTER TABLE "РасходДенег"
	ADD CONSTRAINT "РасходДенег_F_9958" FOREIGN KEY ("Поставщики") REFERENCES "Поставщики" ("primaryKey");

CREATE INDEX "РасходДенег_I_2241" on "РасходДенег" ("Поставщики");

ALTER TABLE "РасходДенег"
	ADD CONSTRAINT "РасходДенег_F_9863" FOREIGN KEY ("Финансисты") REFERENCES "Финансисты" ("primaryKey");

CREATE INDEX "РасходДенег_I_9880" on "РасходДенег" ("Финансисты");

ALTER TABLE "ПереченьМат"
	ADD CONSTRAINT "ПереченьМат_F_7996" FOREIGN KEY ("Материалы") REFERENCES "Материалы" ("primaryKey");

CREATE INDEX "ПереченьМат_IМ_260" on "ПереченьМат" ("Материалы");

ALTER TABLE "ПереченьМат"
	ADD CONSTRAINT "ПереченьМат_F_8277" FOREIGN KEY ("РасходДенег") REFERENCES "РасходДенег" ("primaryKey");

CREATE INDEX "ПереченьМат_IР_90" on "ПереченьМат" ("РасходДенег");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


