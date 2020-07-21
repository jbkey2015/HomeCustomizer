using Dapper;
using HomeCustomizer.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace HomeCustomizer.DataAccess
{
    public class CustomHomeRepo
    {
        string ConnectionString;

        public CustomHomeRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("HomeCustomizer");
        }

        public IEnumerable<CustomHome> GetAllCustomHomes()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<CustomHome>("select * from CustomHome");
            }
        }

        public CustomHome GetCustomHomesById(int id)
        {
            var sql = @"select *
                        from CustomHome
                        where id = @id";

            var parameters = new { Id = id };

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<CustomHome>(sql, parameters);
            }
        }

        public IEnumerable<CustomHome> GetCustomHomeByColorBoardId(int colorBoardId)
        {
            var sql = @"select * 
                        from CustomHome
                        where ColorBoardId = @ColorBoardId";

            var parameters = new { ColorBoardId = colorBoardId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<CustomHome>(sql, parameters);
            }
        }


    }
}
