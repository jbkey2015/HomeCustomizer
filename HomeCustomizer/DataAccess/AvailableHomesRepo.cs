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
    public class AvailableHomesRepo
    {
        string ConnectionString;

        public AvailableHomesRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("HomeCustomizer");
        }

        public IEnumerable<AvailableHomes> GetAllAvailableHomes()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<AvailableHomes>("select * from AvailableHomes");
            }
        }

        public AvailableHomes GetAvailableHomesById(int id)
        {
            var sql = @"select *
                        from AvailableHomes
                        where id = @id";

            var parameters = new { Id = id };

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<AvailableHomes>(sql, parameters);
            }
        }
        
    }
}
