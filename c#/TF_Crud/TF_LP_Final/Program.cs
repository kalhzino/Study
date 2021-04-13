using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Configuration;

namespace TF_LP_Final
{
    class Program
    {       
        static void Main(string[] args)
        {
            //Variavel de conexão, utilizando APPCONFIG
            MySqlConnection databaseConnection = null;
            var connectionString = ConfigurationManager.ConnectionStrings["dbEscolaConnection"].ConnectionString;
            databaseConnection = new MySqlConnection(connectionString);
          
           
            
            //metodo de chamada do "menu"
            void menu()
            {
                Console.WriteLine("========================================================================================");
                Console.WriteLine("                                MENU");
                Console.WriteLine("========================================================================================");
                Console.WriteLine("Opcões:\n -1: Para consultar Aluno. " +
                    "\n -2: Para Alterar dados de aluno" +
                    "\n -3: Para Criar novo cadastro de aluno " +
                    "\n -4: Para deletar Aluno" +
                    "\n -5: Para Pesquisar" +
                    "\n -0: Para Fechar");
                Console.WriteLine("========================================================================================");
                Console.WriteLine("digite a opção desejada! ");
                int CaseSwitch = int.Parse(Console.ReadLine());
                
                switch (CaseSwitch)

                {
                    case 1:
                        listarAlunos();
                        Console.ReadKey();
                        Console.Clear();
                        menu();
                        break;
                    case 2:
                        listarAlunos();
                        AlterarAluno();
                        Console.ReadKey();
                        Console.Clear();
                        menu();
                        break;
                    case 3:
                        NovoAluno();
                        Console.ReadKey();
                        Console.Clear();
                        menu();
                        break;
                    case 4:
                        listarAlunos();
                        DeletAluno();
                        Console.ReadKey();
                        Console.Clear();
                        menu();
                        break;
                    case 5:
                        Console.Clear();
                        PesquisarAluno();
                        Console.ReadKey();
                        Console.Clear();
                        menu();
                        break;
                    case 99:
                        CorrigirErro1290();
                        Console.ReadKey();
                        Console.Clear();
                        menu();
                        break;
                    case 0:
                        Environment.Exit(1);
                        break;
                    default:
                        Console.WriteLine("Opção invalida");
                        Console.ReadKey();
                        Console.Clear();
                        menu();
                        break;
                }

            }
            menu();
            void CorrigirErro1290()
            {
                
                    string corrige = "set @@global.super_read_only = 0;";
                    MySqlCommand corrigir = new MySqlCommand(corrige, databaseConnection);
                    
                using (var conect = new MySqlConnection(connectionString)) 
                {
                    try
                    {
                        conect.Open();
                        MySqlCommand comando = new MySqlCommand(corrige, conect);
                        MySqlDataReader reader;
                        reader = comando.ExecuteReader();
                    }
                    catch (MySqlException erro)
                    {
                        Console.WriteLine("erro {0}", erro);
                        
                    }
                    conect.Close();
                }

               
            }

            void MontaTelaAluno(string rotina)
            {
                Console.Clear();
                Console.CursorTop = 1;
                Console.CursorLeft = 1;
                Console.Write("{0} - DE ALUNO ", rotina);
                Console.CursorTop = 2;
                Console.CursorLeft = 1;
                Console.Write("========================================================================");
                Console.CursorTop = 5;
                Console.CursorLeft = 1;
                Console.Write("Nome: ");
                Console.CursorTop = 7;
                Console.CursorLeft = 1;
                Console.Write("RA: ");
                Console.CursorLeft = 30;
                Console.Write("CURSO: ");
            }
            
            void listarAlunos(){
                
                try
                {   //Mostra os dados da tabela aluno.
                    Console.Clear();
                    string busca = "SELECT*from alunotable";
                    MySqlCommand comando = new MySqlCommand(busca, databaseConnection);
                    databaseConnection.Open();

                    using (var reader = comando.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine(" \nID: {0}\nAluno: {1} \nRA: {2}\nCurso: {3}",
                                reader["idAluno"],
                                reader["Al_nome"],
                                reader["Al_RA"],
                                reader["Al_Curso"]);  
                        }
                        
                        
                    }
                    databaseConnection.Close();
                }
                catch (MySqlException erro)
                {
                    Console.WriteLine("erro ao conectar {0}", erro);
                }
                
            }

            void AlterarAluno(int idAluno = 0) // deu bom.
            {
                Console.WriteLine("Qual aluno deseja alterar?");
                idAluno = int.Parse(Console.ReadLine());
                MontaTelaAluno("Alteração.");
                Console.CursorTop = 5;
                Console.CursorLeft = 7;
                string Nome = Console.ReadLine();
                Console.CursorTop = 7;
                Console.CursorLeft = 6;
                string RA = Console.ReadLine();
                Console.CursorLeft = 30;
                string curso = Console.ReadLine();

                using (var con = new MySqlConnection(connectionString))
                    
                {
                    var upAluno = "UPDATE dbescola.alunotable SET Al_Nome = @nome, Al_RA = @ra, Al_curso = @cur WHERE idAluno = @id";
                    var comando = new MySqlCommand(upAluno, databaseConnection);
                    comando.Parameters.Add("@nome", MySqlDbType.VarChar);
                    comando.Parameters["@nome"].Value = Nome;
                    comando.Parameters.AddWithValue("@ra", RA);
                    comando.Parameters.AddWithValue("@cur", curso);
                    comando.Parameters.AddWithValue("@id", idAluno);
                    databaseConnection.Open();                    
                    Console.ReadKey();
                    try
                    {
                        
                        using (var reader = comando.ExecuteReader())
                         {
                        reader.Read();
                            Console.WriteLine("alterado");                            
                            databaseConnection.Close();       
                         }                        
                    }
                    catch (MySqlException erro)
                    {
                        Console.WriteLine("erro {0}", erro);
                    }
                }

            }

            void NovoAluno()//funfou - mas tem que refatorar. erro nos parametros

                {
                MontaTelaAluno("inclusão");
                Console.CursorTop = 5;
                Console.CursorLeft = 7;
                string Nome = Console.ReadLine();
                Console.CursorTop = 7;
                Console.CursorLeft = 6;
                string RA = Console.ReadLine();
                Console.CursorLeft = 30;
                string curso = Console.ReadLine();

                


                string Salvar = "insert into dbescola.alunotable(Al_Nome, Al_RA, Al_curso) values (@Nome, @RA, @cur)";
                using (var conexao2 = new MySqlConnection(connectionString))
                    
                {
                    MySqlCommand comando = new MySqlCommand(Salvar, conexao2);
                    comando.Parameters.AddWithValue("@Nome", Nome);
                    comando.Parameters.AddWithValue("@RA", RA);
                    comando.Parameters.AddWithValue("@cur", curso);
                    MySqlDataReader reader;
                    conexao2.Open();
                    reader = comando.ExecuteReader();
                    conexao2.Close();
                    Console.WriteLine("Aluno adicionado!");
                }
              
             }

            void DeletAluno(string id = "")
            {
                string Deletar = "Delete from dbescola.alunotable where idAluno = @id";
                Console.WriteLine("\ndigite a ID do aluno que quer deletar");
                id = (Console.ReadLine());
                using (var conexao3 = new MySqlConnection(connectionString))
                {
                    try
                    {
                        MySqlCommand comando = new MySqlCommand(Deletar, conexao3);
                        MySqlDataReader reader;
                        comando.Parameters.AddWithValue("@id", id);
                        conexao3.Open();
                        reader = comando.ExecuteReader();
                        Console.WriteLine("deletado com sucesso! ");
                        Console.ReadKey();
                        listarAlunos();
                        conexao3.Close();
                    }
                    catch (MySqlException erro)
                    { 
                     Console.WriteLine("sql erro {0}", erro);
                    
                    }
                }
            }

            void PesquisarAluno()
            {
                Console.Clear();
                Console.WriteLine("Digite o nome ou RA para sua busca");
                string busca = Console.ReadLine();               
                string Pesquisa = "SELECT * FROM dbescola.alunotable WHERE Al_Nome = @busca or Al_ra = @busca";
                MySqlCommand comando = new MySqlCommand(Pesquisa, databaseConnection);
                comando.Parameters.AddWithValue("@busca", busca);
                databaseConnection.Open();

                using (var reader = comando.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Console.WriteLine(" \nID: {0}\nAluno: {1}, \nRA: {2},\nCurso: {3}",
                            reader["idAluno"],
                            reader["Al_nome"],
                            reader["Al_RA"],
                            reader["Al_Curso"]);
                    }


                }
                databaseConnection.Close();

            }

        }
       
    }
}
