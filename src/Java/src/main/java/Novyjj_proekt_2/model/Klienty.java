package Novyjj_proekt_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj_proekt_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISNovyjj_proekt_2Клиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ДатаРождения")
    private Date датарождения;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Date getДатаРождения() {
      return датарождения;
    }

    public void setДатаРождения(Date датарождения) {
      this.датарождения = датарождения;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }


}