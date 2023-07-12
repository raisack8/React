from ..models import SectionModel,StageModel
from rest_framework.response import Response
import datetime


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
        # POSTで送られてきたidに紐づくSectionを返す。
        queryset = SectionModel.objects.filter(id__in=data["id"])


        def convert_time_str(start_time):
            return int(f"{start_time.hour}{'{:02}'.format(start_time.minute)}")
        

        # print(queryset)
        res_list = []
        time_list = []
        for query in queryset:
            # print(f'{str(query.start_time.hour())}:{str(query.start_time.minute())}')
            obj={
              # 'start_time':convert_time_str(query.start_time),
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
            # ★res_listの中身はstart_timeをキーとしてSectionリストができている
        
        # 各Sectionのstart_timeを時間順にソート
        time_list.sort()


        rtn_list = []
        # 先程ソートした順にsectionの中身を見ていき、時間順でリストに格納する。
        for time in time_list:
            for res in res_list:
                if res['data']['start_time'] == time:
                  rtn_list.append(res['data'])
                  # 0711 上手くデータを作る方法が思いつかない！！！


        continue_flag = True
        start_time = time_list[0]
        end_time = time_list[len(time_list)-1]
        target_time = start_time
        stage_id = 0
        return_list = [[],[],[],[]]
        error_msg = ""

        try:
          # 自分でもよくわからないアルゴリズム、、
          while continue_flag:
              for i,res in enumerate(res_list):
                  # target_timeと同じresのデータを探す
                  if res['data']['start_time'] == target_time:
                      copy_sec = res
                      res_list.pop(i)
                      copy_sec['data']['stage'] = stage_id
                      return_list[stage_id].append(copy_sec)
                      # 一致したtimeをtime_listから取り除く
                      for j ,time in enumerate(time_list):
                          if time == target_time:
                              time_list.pop(j)
                              break
                      # 後ほど5足すので5引いておく、的な？
                      target_time = target_time + datetime.timedelta(minutes=copy_sec['data']['allotted_time']-5)
                      continue
              if len(time_list) == 0:
                  continue_flag = False
                  # ループ終了
                  break
              
              if target_time <= end_time:
                  # 5分繰り上げて再ループ
                  target_time = target_time + datetime.timedelta(minutes=5)
                  continue
              else:
                  stage_id = stage_id + 1
                  if stage_id==4:
                      # インデックスオーバー強制終了
                      error_msg = "並行して表示できる数を超えています。"
                      return_list = []
                  target_time = start_time
                  continue
        except Exception as e:
            error_msg = "システムエラーが発生しました。"
            # エラーを通知してほしい...
        # result = {
        #     'myTiteSections': return_list,
        #     'errorMsg': error_msg
        # }

        result = return_list
        print(return_list)
            
        return {"message": rtn_list}

