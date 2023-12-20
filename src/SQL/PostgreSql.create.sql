




CREATE TABLE Поставщики (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Наименование VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 Адрес VARCHAR(255) NULL,
 Почта VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Материалы (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Наименование VARCHAR(255) NULL,
 Марка VARCHAR(255) NULL,
 Единицы VARCHAR(2) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиенты (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 ФИО VARCHAR(255) NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 НомерТелефона INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПереченьТоваров (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Товары UUID NOT NULL,
 ПриходДенег UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Финансисты (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 ФИО VARCHAR(255) NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 НомерТелефона INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Товары (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Наименование VARCHAR(255) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставТовара (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Единицы VARCHAR(2) NULL,
 Материалы UUID NOT NULL,
 Товары UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РегистрОборот (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Дата TIMESTAMP(3) NULL,
 РасходПриход VARCHAR(6) NULL,
 Тип VARCHAR(18) NULL,
 Сумма DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПриходДенег (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Дата TIMESTAMP(3) NULL,
 РасходПриход VARCHAR(6) NULL,
 Тип VARCHAR(18) NULL,
 Сумма DOUBLE PRECISION NULL,
 Финансисты UUID NOT NULL,
 Клиенты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПереченьУслуг (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Услуги UUID NOT NULL,
 ПриходДенег UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасходДенег (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Дата TIMESTAMP(3) NULL,
 Банк VARCHAR(8) NULL,
 Счет INT NULL,
 ИНН INT NULL,
 БИК INT NULL,
 РасходПриход VARCHAR(6) NULL,
 Тип VARCHAR(18) NULL,
 Сумма DOUBLE PRECISION NULL,
 Поставщики UUID NOT NULL,
 Финансисты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПереченьМат (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Материалы UUID NOT NULL,
 РасходДенег UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Услуги (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Наименование VARCHAR(255) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ПереченьТоваров ADD CONSTRAINT FKf7954e1674e993369f4594f7adfedb8ebc726a27 FOREIGN KEY (Товары) REFERENCES Товары; 
CREATE INDEX Indexf7954e1674e993369f4594f7adfedb8ebc726a27 on ПереченьТоваров (Товары); 

 ALTER TABLE ПереченьТоваров ADD CONSTRAINT FK89315a20de720206d562c3ea760d4644c4036446 FOREIGN KEY (ПриходДенег) REFERENCES ПриходДенег; 
CREATE INDEX Index89315a20de720206d562c3ea760d4644c4036446 on ПереченьТоваров (ПриходДенег); 

 ALTER TABLE СоставТовара ADD CONSTRAINT FK7b119f260890af36e197d491ae8c98588965a5aa FOREIGN KEY (Материалы) REFERENCES Материалы; 
CREATE INDEX Index7b119f260890af36e197d491ae8c98588965a5aa on СоставТовара (Материалы); 

 ALTER TABLE СоставТовара ADD CONSTRAINT FKb136905ed323e249f7a9ef9f2df72309b30f2811 FOREIGN KEY (Товары) REFERENCES Товары; 
CREATE INDEX Indexb136905ed323e249f7a9ef9f2df72309b30f2811 on СоставТовара (Товары); 

 ALTER TABLE ПриходДенег ADD CONSTRAINT FKc7b5cbf7594990f16380c26a28fcc86734467309 FOREIGN KEY (Финансисты) REFERENCES Финансисты; 
CREATE INDEX Indexc7b5cbf7594990f16380c26a28fcc86734467309 on ПриходДенег (Финансисты); 

 ALTER TABLE ПриходДенег ADD CONSTRAINT FKb8314e4a55b89dd76f697fa54825b01e0ea5d491 FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Indexb8314e4a55b89dd76f697fa54825b01e0ea5d491 on ПриходДенег (Клиенты); 

 ALTER TABLE ПереченьУслуг ADD CONSTRAINT FK0cce75879be5423e192bfa70aaa84d0c122fdc17 FOREIGN KEY (Услуги) REFERENCES Услуги; 
CREATE INDEX Index0cce75879be5423e192bfa70aaa84d0c122fdc17 on ПереченьУслуг (Услуги); 

 ALTER TABLE ПереченьУслуг ADD CONSTRAINT FKb412699dcb4c9f0e6889b681363eb1288bf616a2 FOREIGN KEY (ПриходДенег) REFERENCES ПриходДенег; 
CREATE INDEX Indexb412699dcb4c9f0e6889b681363eb1288bf616a2 on ПереченьУслуг (ПриходДенег); 

 ALTER TABLE РасходДенег ADD CONSTRAINT FKe732db8cbe773d58668ca3d831153c0213d49acb FOREIGN KEY (Поставщики) REFERENCES Поставщики; 
CREATE INDEX Indexe732db8cbe773d58668ca3d831153c0213d49acb on РасходДенег (Поставщики); 

 ALTER TABLE РасходДенег ADD CONSTRAINT FKee5a617cd088b90b11f2e8991a97cfcb06f4c6e1 FOREIGN KEY (Финансисты) REFERENCES Финансисты; 
CREATE INDEX Indexee5a617cd088b90b11f2e8991a97cfcb06f4c6e1 on РасходДенег (Финансисты); 

 ALTER TABLE ПереченьМат ADD CONSTRAINT FK9a2f0d67e5bb28e59aa26a246a60b06edc34b148 FOREIGN KEY (Материалы) REFERENCES Материалы; 
CREATE INDEX Index9a2f0d67e5bb28e59aa26a246a60b06edc34b148 on ПереченьМат (Материалы); 

 ALTER TABLE ПереченьМат ADD CONSTRAINT FKb763d9ed8d38513e524318bf4d8f6fcf6264c764 FOREIGN KEY (РасходДенег) REFERENCES РасходДенег; 
CREATE INDEX Indexb763d9ed8d38513e524318bf4d8f6fcf6264c764 on ПереченьМат (РасходДенег); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

