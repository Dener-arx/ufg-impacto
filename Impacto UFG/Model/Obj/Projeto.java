package Model;

public class Projeto {
    private int id_projeto;
    private String tipo_projeto;
    private String titulo_projeto;
    private int id_unidade_projeto;
    private String sigla_unidade_projeto;
    private String nome_unidade_projeto;
    private String coordenacao_projeto;
    private String resumo_projeto;


    public Projeto(){

    }


 // Getter Methods 

 public int getId_projeto() {
  return id_projeto;
 }

 public String getTipo_projeto() {
  return tipo_projeto;
 }

 public String getTitulo_projeto() {
  return titulo_projeto;
 }

 public int getId_unidade_projeto() {
  return id_unidade_projeto;
 }

 public String getSigla_unidade_projeto() {
  return sigla_unidade_projeto;
 }

 public String getNome_unidade_projeto() {
  return nome_unidade_projeto;
 }

 public String getCoordenacao_projeto() {
  return coordenacao_projeto;
 }

 public String getResumo_projeto() {
  return resumo_projeto;
 }

 // Setter Methods 

 public void setId_projeto(int id_projeto) {
  this.id_projeto = id_projeto;
 }

 public void setTipo_projeto(String tipo_projeto) {
  this.tipo_projeto = tipo_projeto;
 }

 public void setTitulo_projeto(String titulo_projeto) {
  this.titulo_projeto = titulo_projeto;
 }

 public void setId_unidade_projeto(int id_unidade_projeto) {
  this.id_unidade_projeto = id_unidade_projeto;
 }

 public void setSigla_unidade_projeto(String sigla_unidade_projeto) {
  this.sigla_unidade_projeto = sigla_unidade_projeto;
 }

 public void setNome_unidade_projeto(String nome_unidade_projeto) {
  this.nome_unidade_projeto = nome_unidade_projeto;
 }

 public void setCoordenacao_projeto(String coordenacao_projeto) {
  this.coordenacao_projeto = coordenacao_projeto;
 }

 public void setResumo_projeto(String resumo_projeto) {
  this.resumo_projeto = resumo_projeto;
 }
}

