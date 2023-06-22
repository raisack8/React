from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import SectionModel
from rest_framework import generics
from .serializers import StageSerializer, SectionSerializer
from .models import StageModel, SectionModel

# Create your views here.
class HelloView(APIView):
    def get(self, request):
      return Response({'message': "rrrr"})
    
#-  0621 GPT -----------------------------
class StageSectionAPIView(generics.ListAPIView):
    serializer_class = StageSerializer

    def get_queryset(self):
        # StageModelとSectionModelのデータを結合して返す
        queryset = StageModel.objects.all()
        return queryset

    def get_serializer_context(self):
        # シリアライザに関連するモデルを追加する
        context = super().get_serializer_context()
        sections = SectionModel.objects.all()
        serialized_sections = SectionSerializer(sections, many=True, context={'request': self.request}).data
        context['sections'] = serialized_sections
        return context

    def get_serializer(self, *args, **kwargs):
        # StageSerializerとSectionSerializerを使用する
        kwargs['context'] = self.get_serializer_context()
        return self.serializer_class(*args, **kwargs)