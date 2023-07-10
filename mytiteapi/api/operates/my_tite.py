from ..models import SectionModel,StageModel
from rest_framework.response import Response


class MyTiteGenerator:
    @classmethod
    def get(self, obj ,request):
        param_value = request.query_params.get('id')
        serializer = obj.serializer_class(obj.get_queryset(), many=True)
        # print(param_value)
        return serializer.data
    
    @classmethod
    def post(self, obj, request):
        # POSTリクエストで送信されたデータを取得する
        data = request.data
        print(data)
        # POSTで送られてきたidに紐づくSectionを返す。
        queryset = SectionModel.objects.filter(id__in=data["id"])
        # print(queryset)
        res_list = []
        time_list = []
        for query in queryset:
            obj={
              'start_time':query.start_time,
              'data': {
                'id':query.id,
                'fes_id':query.fes_id.id,
                'appearance_date':query.appearance_date,
                # stage_idを指定
                'stage':0,
                'start_time':query.start_time,
                'allotted_time':query.allotted_time,
                'live_category':query.live_category.id,
                'artist_name':query.artist_name,
                # 'apparence_flg':query.apparence_flg,
                # 'change_time_flg':query.change_time_flg,
                # 'other1':query.other1,
                # 'other2':query.other2,
                # 'official_url':query.official_url,
                # 'twitter_id':query.twitter_id,
                # 'insta_id':query.insta_id,
              }
            }
            time_list.append(query.start_time)
            # 選択してきたSectionをリストに格納
            res_list.append(obj)
        
        # 各Sectionのstart_timeを時間順にソート
        time_list.sort()
        print(time_list)

        rtn_list = []
        # 先程ソートした順にsectionの中身を見ていき、時間順でリストに格納する。
        for time in time_list:
            for res in res_list:
                if res['start_time'] == time:
                  rtn_list.append(res['data'])

        return {"message": rtn_list}
