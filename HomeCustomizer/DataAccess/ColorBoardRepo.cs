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
    public class ColorBoardRepo
    {
        string ConnectionString;

        public ColorBoardRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("HomeCustomizer");
        }

        public IEnumerable<ColorBoard> GetAllColorBoards()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<ColorBoard>("select * from ColorBoard");
            }
        }

        public ColorBoard GetColorBoardById(int id)
        {
            var sql = @"select *
                        from ColorBoard
                        where id = @id";

            var parameters = new { Id = id };

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<ColorBoard>(sql, parameters);
            }
        }
    }
}
