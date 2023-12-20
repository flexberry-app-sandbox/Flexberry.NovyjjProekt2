package Novyjj_proekt_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj_proekt_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПереченьУслуг
 */
@Entity(name = "IISNovyjj_proekt_2ПереченьУслуг")
@Table(schema = "public", name = "ПереченьУслуг")
public class PerechenUslug {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Uslugi")
    @Convert("Uslugi")
    @Column(name = "Услуги", length = 16, unique = true, nullable = false)
    private UUID _uslugiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Uslugi", insertable = false, updatable = false)
    private Uslugi uslugi;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PrixodDeneg")
    @Convert("PrixodDeneg")
    @Column(name = "ПриходДенег", length = 16, unique = true, nullable = false)
    private UUID _prixoddenegid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PrixodDeneg", insertable = false, updatable = false)
    private PrixodDeneg prixoddeneg;


    public PerechenUslug() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}