﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Novyjj_proekt_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Перечень услуг.
    /// </summary>
    [Caption("Перечень услуг")]
    [TrimmedStringStorage(false)]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПереченьУслугE", new string[] {
            "Количество as \'Количество\'",
            "Услуги as \'Услуги\'",
            "Услуги.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Услуги.Наименование"})]
    [MasterViewDefineAttribute("ПереченьУслугE", "Услуги", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ПереченьУслуг : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Novyjj_proekt_2.Услуги fУслуги;
        
        private IIS.Novyjj_proekt_2.ПриходДенег fПриходДенег;
        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьУслуг.Количество CustomAttributes)

        // *** End programmer edit section *** (ПереченьУслуг.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Get start)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Get end)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Set start)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Set end)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Set end)
            }
        }
        
        /// <summary>
        /// Перечень услуг.
        /// </summary>
        [PropertyStorage(new string[] {
                "Услуги"})]
        [NotNull()]
        public virtual IIS.Novyjj_proekt_2.Услуги Услуги
        {
            get
            {
                IIS.Novyjj_proekt_2.Услуги result = this.fУслуги;
                return result;
            }
            set
            {
                this.fУслуги = value;
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Novyjj_proekt_2.ПриходДенег.
        /// </summary>
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ПриходДенег"})]
        public virtual IIS.Novyjj_proekt_2.ПриходДенег ПриходДенег
        {
            get
            {
                IIS.Novyjj_proekt_2.ПриходДенег result = this.fПриходДенег;
                return result;
            }
            set
            {
                this.fПриходДенег = value;
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПереченьУслугE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПереченьУслугE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПереченьУслугE", typeof(IIS.Novyjj_proekt_2.ПереченьУслуг));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ПереченьУслуг.
    /// </summary>
    public class DetailArrayOfПереченьУслуг : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Novyjj_proekt_2.DetailArrayOfПереченьУслуг members)

        // *** End programmer edit section *** (IIS.Novyjj_proekt_2.DetailArrayOfПереченьУслуг members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ПереченьУслуг by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ПереченьУслуг.
        /// </summary>
        public DetailArrayOfПереченьУслуг(IIS.Novyjj_proekt_2.ПриходДенег fПриходДенег) : 
                base(typeof(ПереченьУслуг), ((ICSSoft.STORMNET.DataObject)(fПриходДенег)))
        {
        }
        
        public IIS.Novyjj_proekt_2.ПереченьУслуг this[int index]
        {
            get
            {
                return ((IIS.Novyjj_proekt_2.ПереченьУслуг)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Novyjj_proekt_2.ПереченьУслуг dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
