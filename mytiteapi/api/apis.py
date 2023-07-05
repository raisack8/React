from rest_framework import viewsets, routers
from .models import SectionModel,StageModel
from .serializers import SectionModelSerializer,StageModelSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core import serializers
from django.http import HttpResponse
from django.views.decorators.http import require_POST
import json
import sys
'''
Django API実装参考URL: https://di-acc2.com/programming/python/10325/
'''

class SectionViewSet(viewsets.ModelViewSet):
    queryset = SectionModel.objects.all()
    serializer_class = SectionModelSerializer

class TestSet(viewsets.ModelViewSet):
    queryset = SectionModel.objects.filter(id=1)
    serializer_class = SectionModelSerializer


class TestApi(ListCreateAPIView):
    '''TestApiで取得出来そう'''
    # 対象とするモデルのオブジェクトを定義
    queryset = SectionModel.objects.filter(fes_id=1)
    # APIがデータを返すためのデータ変換ロジックを定義
    serializer_class = SectionModelSerializer
    # 認証
    permission_classes = []

    def get(self, request, *args, **kwargs):
        # リクエストからGETパラメータを取得
        param_value = request.query_params.get('id')
        serializer = self.serializer_class(self.get_queryset(), many=True)
        print(param_value)
        return Response(serializer.data)
    def post(self, request, *args, **kwargs):
        # POSTリクエストで送信されたデータを取得する
        data = request.data
        print("--------------- POST")
        # POSTで送られてきたidに紐づくSectionを返す。
        queryset = SectionModel.objects.filter(id__in=data["id"])
        print(queryset)
        res_dict = {}
        for i,query in enumerate(queryset):
            res_dict[i]={
            'id':query.id,
            'fes_id':query.fes_id.id,
            'appearance_date':query.appearance_date,
            'stage':query.stage.id,
            'start_time':query.start_time,
            'allotted_time':query.allotted_time,
            'live_category':query.live_category.id,
            'artist_name':query.artist_name,
            'apparence_flg':query.apparence_flg,
            'change_time_flg':query.change_time_flg,
            'other1':query.other1,
            'other2':query.other2,
            'official_url':query.official_url,
            'twitter_id':query.twitter_id,
            'insta_id':query.insta_id,
            }
            
        return Response({"message": res_dict})
        
class StageApi(ListCreateAPIView):
    '''TestApiで取得出来そう'''
    # 対象とするモデルのオブジェクトを定義
    queryset = StageModel.objects.filter(fes_id=1)
    # APIがデータを返すためのデータ変換ロジックを定義
    serializer_class = StageModelSerializer
    # 認証
    permission_classes = []

# Create your views here.
class HelloView(APIView):
    '''こちらは使わない？'''
    def get(self, request):
      print("++++++++++++")
      get_id = int(request.GET.get("fes_id"))
      # get_obj = SectionModel.objects.filter(fes_id=get_id)
      get_obj = SectionModel.objects.all()
      output_data = serializers.serialize(
        "json",get_obj
        )
      print(output_data)
      return Response(output_data)
      # return HttpResponse(enc,
      #                     content_type="text/json-comment-filtered",
      #                     charset="UTF-8")
    def post(self, request):
      data = request.data
      print("++++++++++++")
      return HttpResponse("{'status':'OK'}",
                          content_type="text/json-comment-filtered",
                          charset='UTF-8')

router = routers.DefaultRouter()
# router.register(r'sections', SectionViewSet)
# router.register(r'test', TestSet)
# router.register(r'api', HelloView)