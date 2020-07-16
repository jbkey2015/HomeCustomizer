using HomeCustomizer.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace HomeCustomizer.DataAccess
{
    public class ShuttersRepo
    {
        string ConnectionString;

        public ShuttersRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("HomeCustomizer");
        }

        public IEnumerable<Shutters> GetAllShutters()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Shutters>("select * from shutters");
            }
        }

        public Shutters GetShuttersById(int id)
        {
            var sql = @"select *
                        from Shutters
                        where id = @id";

            var parameters = new { Id = id };

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Shutters>(sql, parameters);
            }
        }
    }
}
